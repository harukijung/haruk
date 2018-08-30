import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders }  from '@angular/core';


// route
import { RouterModule,Routes, Router, ActivatedRoute  } from '@angular/router';
import { DemoComponent } from '../demo/demo.component';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { SearchComponent } from '../search/search.component';
import { FormComponent } from '../form/form.component';
import { CorporateComponent } from '../corporate/corporate.component';

//import {AuthGuard} from '../auth.guard';
import {AppAuthGuard} from '../app-auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'search', component: SearchComponent },
  { path: 'form', component: FormComponent ,
    canActivate: [AppAuthGuard] },
  { path: 'corporate', component: CorporateComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

 
  exports: [RouterModule],
  
  declarations: []
})
export class RouteModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);