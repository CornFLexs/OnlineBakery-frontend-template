import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"home",component:HomepageComponent},
  {path:"product",component:ProductsComponent},
  {path:"about",component:AboutusComponent},
  {path:"**",redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
