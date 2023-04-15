import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  cakes :any =[{url:"assets/images/cakes/images.jpg",name:"Sample Cake",detail:"Details about product",price:99},
  {url:"assets/images/cakes/cake2.jpg",name:"Sample Cake",detail:"Details about product",price:99},
  {url:"assets/images/cakes/cake3.jpg",name:"Sample Cake",detail:"Details about product",price:99},
  {url:"assets/images/cakes/cake4.jpg",name:"Sample Cake",detail:"Details about product",price:99}]

  breads :any=[{url:"assets/images/breads/bread1.jpg",name:"Sample Bread",detail:"Details about product",price:99},
  {url:"assets/images/breads/bread2.jpg",name:"Sample Bread",detail:"Details about product",price:99},
  {url:"assets/images/breads/bread3.jpg",name:"Sample Bread",detail:"Details about product",price:99},
  {url:"assets/images/breads/bread4.jpg",name:"Sample Bread",detail:"Details about product",price:99}]

  cookies :any=[{url:"assets/images/cookies/cookie1.jpg",name:"Sample Cookie",detail:"Details about product",price:99},
  {url:"assets/images/cookies/cookie2.jpg",name:"Sample Cookie",detail:"Details about product",price:99},
  {url:"assets/images/cookies/cookie3.jpg",name:"Sample Cookie",detail:"Details about product",price:99},
  {url:"assets/images/cookies/cookie4.jpg",name:"Sample Cookie",detail:"Details about product",price:99}]

  cupcakes :any=[{url:"assets/images/cupcake/cupcake1.jpg",name:"Sample Cupcake",detail:"Details about product",price:99},
  {url:"assets/images/cupcake/cupcake2.jpg",name:"Sample Cupcake",detail:"Details about product",price:99},
  {url:"assets/images/cupcake/cupcake3.jpg",name:"Sample Cupcake",detail:"Details about product",price:99},
  {url:"assets/images/cupcake/cupcake4.jpg",name:"Sample Cupcake",detail:"Details about product",price:99}]
}
