import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  increaseQuantity(id: any): any[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  addProduct(product: any) {
    let cart = this.getCart();
    let existingProduct = cart.find((item: any) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartTotalItems', cart.length.toString());
  }

  getTotalItems() {
    return localStorage.getItem('cartTotalItems') || '0';
  }

  decreaseProductQuantity(productId: any): any[] {
    let cart = this.getCart();
    let product = cart.find((item: any) => item.id === productId);
    if (product.quantity > 1) {
      product.quantity--;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
  }

  increaseProductQuantity(productId: any): any[] {
    let cart = this.getCart();
    let product = cart.find((item: any) => item.id === productId);
    product.quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
  }

  getTotalPrice() {
    let cart = this.getCart();
    return cart.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0);
  }

  deleteProduct(productId: any) {
    let cart = this.getCart();
    let newCart = cart.filter((item: any) => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(newCart));
    localStorage.setItem('cartTotalItems', newCart.length.toString());
    return newCart;
  }
}