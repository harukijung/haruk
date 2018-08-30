import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// route
//import { RouterModule,Routes, Router, ActivatedRoute } from "@angular/router";


// service
import { CustomerService } from './customer.service';
import { MenuService } from './menu.service';

// self create module
import { MaterialModule } from './material.module';

//self create component
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { MenuDynamicComponent } from './menu-dynamic/menu-dynamic.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouteComponent } from './route/route.component';
import { SearchComponent } from './search/search.component';

import { routing } from './route/route.module';
import { FormComponent } from './form/form.component';
import {AuthGuard} from './auth.guard';
import {AppAuthGuard} from './app-auth.guard';
import { CorporateComponent } from './corporate/corporate.component';
import { CorpService } from './services/corp.service';
/*
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'search', component: SearchComponent }
];
*/

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent,
    MenuComponent,
    MainComponent,
    MenuDynamicComponent,
    SideNavComponent,
    RouteComponent,
    SearchComponent,
    FormComponent,
    CorporateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    routing
   // RouterModule.forRoot(routes)


  ],
  providers: [CustomerService,MenuService, 
    AppAuthGuard, CorpService],
  bootstrap: [AppComponent]
})





export class AppModule { }
