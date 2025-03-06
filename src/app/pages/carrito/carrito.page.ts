import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartsService } from 'src/app/services/carts.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: false
})
export class CarritoPage implements OnInit {

  cart: any[] = [];

  constructor(private cartsService: CartsService, private router: Router) {}


  total: number = 0;
 
 ngOnInit() {
    this.cart = this.cartsService.getCart();
   this.getPrice();
    console.log(this.cart);
  }

  increaseQuantity(id: any) {
    console.log("increase")
    this.getPrice();
    this.cart = this.cartsService.increaseProductQuantity(id);
  }

  decreaseQuantity(id: any) {
    this.cart = this.cartsService.decreaseProductQuantity(id);
    this.getPrice();
  }

  getPrice() {
    this.total = this.cartsService.getTotalPrice()
  }

  removeProduct(id: any) {
    this.cart = this.cartsService.deleteProduct(id);
    this.getPrice();
  }
  next(){
    this.router.navigate(['resumen'])
  }
}
