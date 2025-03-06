import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  standalone:false
})
export class FilterComponent  implements OnInit {

  @Output() categorySelected = new EventEmitter<string>();

  category = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

  selectCategory(categorie: string) {
    this.categorySelected.emit(categorie);
  }
  


  constructor() { }

  ngOnInit() {}

}

