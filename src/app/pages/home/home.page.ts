
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  productos: any[] = [];
  params: any = { page: 0 };
 


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(event?: any) {
    this.params.page += 1;

    this.productService.getproduct(this.params).subscribe({
      next: (response: any) => {
        this.productos = response; // Asegúrate de que `response` es un array
        console.log(this.productos);
      },
      error: (error: any) => {
        console.error("Error cargando productos:", error);
      }
    });
  }
  applyFilter(categorie: string) {
    console.log('Categoría seleccionada:', categorie);  // Para depuración
    if (categorie!== "") {
      this.productService.getProductByCategory(categorie).subscribe({
        next: (rest: any) => {
          this.productos = rest;
        },
        error: (error: any) => { }
      })
    } else {
      this.getProducts()
    }
  
  
  }
 }
  

