import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { Mode1Component } from './module1/mode1/mode1.component';
import { Module1Module } from './module1/module1.module';

const appRoutes: Routes=[
  {path:'module1/mode1', component:Mode1Component}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,Module1Module, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
