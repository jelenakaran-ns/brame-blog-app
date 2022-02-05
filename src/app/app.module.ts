import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogModule } from '@modules/blog/blog.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteGuard } from './guards/route.guard';
import { HttpErrorInterceptor } from './interceptors/error.inteceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    RouteGuard,

],
  bootstrap: [AppComponent]
})
export class AppModule { }
