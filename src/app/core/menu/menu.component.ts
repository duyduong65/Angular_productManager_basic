import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {IProduct} from '../../iproduct';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() {
  }

  @Output() pushProduct = new EventEmitter();
  @Input() products: any;
  productFilter: IProduct[] = [];

  search(keyWord): void {
    return this.products.filter(
      product => product.name.toLowerCase().indexOf(keyWord) !== -1
    );
  }

  filter(event) {
    const keyWord = event.target.value;
    this.productFilter = (keyWord) ? this.search(keyWord) : this.products;
    this.pushProduct.emit(this.productFilter);
  }

  ngOnInit() {
    this.productFilter = this.products;
  }

}
