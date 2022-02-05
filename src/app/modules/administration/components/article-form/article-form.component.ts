import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministrationService } from '@modules/administration/services/administration.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  @Input() article?: any;
  bodyError = '';
  titleError = '';
  isCreate?: boolean;
  articleForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(255)] ),
    body: new FormControl('', [ Validators.required, Validators.maxLength(512) ]),
  });


  get title(): any {
    return this.articleForm.get('title');
  }

  get body(): any {
    return this.articleForm.get('body');
  }
  constructor(
    private readonly adminService: AdministrationService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.isCreate = this.router.url.includes('create');
    if (!this.isCreate) {
      const { title, body } =  this.article;
      this.articleForm.patchValue({ title, body});
    }
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    return absCtrl as FormControl;
  }

  cancel(): void {
    if (this.isCreate) {
      this.router.navigateByUrl('admin/articles');
      return;
    }
    location.reload();
  }

  isDataValid(): boolean {
    this.bodyError = '';
    this.titleError = '';
    if (!this.title.valid) {
      this.titleError = this.title.errors.required ?
        'Please fill out title field' :
        'Name max length is 255 characters, please make it shorter!';
      return false;
    }
    if (!this.body.valid) {
      this.bodyError = this.body.errors.required ?
        'Please fill out description field' :
        'Description max length is 512 characters, please make it shorter!';
      return false;
    }
    return true;
  }


  save(): void {
    if (!this.isDataValid()) {
      return;
    }

    const payload = {
      ...this.articleForm.value,
      category_id: this.article?.category_id || 1,
    };
    if (this.isCreate) {
      this.adminService.createArticle(payload)
        .subscribe(res => this.router.navigateByUrl('admin/articles'));
    } else {
      this.adminService.editArticle(this.article.id, payload)
        .subscribe(() => {
          location.reload();
        });
    }
  }

}
