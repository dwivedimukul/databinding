import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { Mode1Component } from './module1/mode1/mode1.component';
import { Module1Module } from './module1/module1.module';
import { Mode2Component } from './module2/mode2/mode2.component';
import { Module2Module } from './module2/module2.module';

const appRoutes: Routes=[
  {path:'module1/mode1', component:Mode1Component},
  {path:'module2/mode2',component:Mode2Component}
]
@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,Module1Module, RouterModule.forRoot(appRoutes),Module2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
