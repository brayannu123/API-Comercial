import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartsService } from 'src/app/services/carts.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
  standalone: false
})
export class DetallesPage implements OnInit {

  detalleId: string = '';
  detalle: any = {} as any;

  constructor(
    private actRoute: ActivatedRoute,
    private productoSVS: ProductService,
    private cartsService: CartsService
  ) { 
    this.detalleId = this.actRoute.snapshot.paramMap.get('id') as string;
  }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(){
    this.productoSVS.getProductoById(this.detalleId).subscribe({
      next: (res: any) => {
        this.detalle = res;  // ✅ Asignar correctamente el producto
        console.log(this.detalle);
      },
      error: (err: any) => {
        console.error("Error obteniendo detalles:", err);
      }
    });
  }

  addToCart(producto: any){
    console.log("add to cart detalle");
    this.cartsService.addProduct(producto);
  }

}
