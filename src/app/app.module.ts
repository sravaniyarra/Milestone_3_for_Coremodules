import { NgModule, Component, BootstrapOptions } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ServiceService } from './service.service';
import { ManageDetailsComponent } from './manage-details/manage-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MenubarComponent } from './menubar/menubar.component';
import { CartComponent } from './componentt/cart/cart.component';
import { ProductsComponent } from './componentt/products/products.component';
import { HeadersComponent } from './componentt/headers/headers.component';
 


const routes:Routes=[
  {
    path:'login',component:LoginComponent
  },
  {
    path:"home",component:HomeComponent
  },
  
   {   path: '',   redirectTo: '/home', pathMatch: 'full'
   }, // redirect to `first-component`
   {
     path:"registration", component:RegistrationComponent
   },
   {
    path:"manage-details",component:ManageDetailsComponent
   },
   {
    path:"menubar",component:MenubarComponent
   },
   {
    path:"cart",component:CartComponent
   },{
    path:"headers",component:HeaderComponent
   },
   {
    path:"products",component:ProductsComponent
   }
   
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    ManageDetailsComponent,
    MenubarComponent,
    HeadersComponent
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
