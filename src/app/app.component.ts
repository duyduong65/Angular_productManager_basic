import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'productManager';
  listProduct: any;
  products: any;

  getListProduct(value) {
    this.listProduct = value;
  }

  getProduct(value) {
    this.products = value;
  }

  constructor() {
  }

  ngOnInit() {
  }
}




