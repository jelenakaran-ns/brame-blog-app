import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationService } from './services/administration.service';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminBaseComponent } from './components/admin-base/admin-base.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SharedModule } from '@modules/shared/shared.module';
import { SingleCategoryComponent } from './components/single-category/single-category.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminBaseComponent,
    CategoriesComponent,
    SingleCategoryComponent,
    CategoryFormComponent,
  ],
  providers: [
    AdministrationService,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdministrationModule { }
