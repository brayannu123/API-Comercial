import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone : false, 
  
})
export class HeaderComponent  implements OnInit {

  @Input() wCart!: boolean;
  constructor(private router: Router) { }

  ngOnInit() {}

  toCart(){
    this.router.navigate(['carrito'])
  }
}
