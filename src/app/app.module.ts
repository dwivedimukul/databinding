import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { Mode1Component } from './module1/mode1/mode1.component';
import { Module1Module } from './module1/module1.module';
import { Mode2Component } from './module2/mode2/mode2.component';
import { Module2Module } from './module2/module2.module';
import { ParentComponent } from './module3/parent/parent.component';
import { ChildComponent } from './module3/parent/child/child.component';
import { Module3Module } from './module3/module3.module';
import { Parent1Component } from './module4/parent1/parent1.component';
import { Child1Component } from './module4/parent1/child1/child1.component';
import { Module4Component } from './module4/module4.component';
import { Module4Module } from './module4/module4.module';

const appRoutes: Routes=[
  {path:'module1/mode1', component:Mode1Component},
  {path:'module2/mode2',component:Mode2Component},
  {path:'module3/parent', component: ParentComponent},
  {path:'module3/parent/child',component:ChildComponent},
  {path:'module4/parent',component:Parent1Component},
  {path:'module/parent/child',component:Child1Component}
]
@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,Module1Module, RouterModule.forRoot(appRoutes),Module2Module,Module3Module,Module4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
