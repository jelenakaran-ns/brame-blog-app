import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministrationService } from '@modules/administration/services/administration.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  @Input() category?: any;
  descriptionError = '';
  nameError = '';
  isCreate?: boolean;
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl('', [ Validators.required, Validators.maxLength(255) ]),
    description: new FormControl('', [ Validators.required, Validators.maxLength(512) ]),
  });
  constructor(
    private readonly adminService: AdministrationService,
    private readonly router: Router,
  ) { }

  get name(): any {
    return this.categoryForm.get('name');
  }

  get description(): any {
    return this.categoryForm.get('description');
  }

  ngOnInit(): void {
    this.isCreate =  this.router.url.includes('create');
    if (!this.isCreate) {
      const { name, description } =  this.category;
      this.categoryForm.patchValue({ name, description });
    }
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    return absCtrl as FormControl;
  }

  cancel(): void {
    if (this.isCreate) {
      this.router.navigateByUrl('admin/categories');
      return;
    }
    location.reload();
  }

  isDataValid(): boolean {
    this.descriptionError = '';
    this.nameError = '';
    if (!this.name.valid) {
      this.nameError = this.name.errors.required ?
        'Please fill out name field' :
        'Name max length is 255 characters, please make it shorter!';
      return false;
    }
    if (!this.description.valid) {
      this.descriptionError = this.description.errors.required ?
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
      ...this.categoryForm.value,
    };
    if (this.isCreate) {
      this.adminService.createCategory(payload)
      .subscribe(res => this.router.navigateByUrl('admin/categories'))
    } else {
      this.adminService.editCategory(this.category.id, payload )
      .subscribe(() => location.reload());
    }
  }


}
