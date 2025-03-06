import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartsService } from 'src/app/services/carts.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
  standalone: false
})
export class ResumenPage implements OnInit {
  paymentForm: FormGroup;
  total = this.cartsService.getTotalPrice();

  constructor(private fb: FormBuilder, private cartsService: CartsService) {
    this.paymentForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      bankAccount: ['', [Validators.required, Validators.minLength(10)]],
      cvc: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      dueDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/([0-9]{2})$')]],
      total: [{ value: 59.28, disabled: true }]
    });
  }

  ngOnInit() {
  }

}
