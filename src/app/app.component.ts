import { Component, OnInit } from '@angular/core';
import { ColorsService } from '@modules/shared/services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'brame-blog-app';
  constructor(
    private colorsService: ColorsService,
  ){}

  ngOnInit(): void {
    this.colorsService.setDefault();
  }
}
