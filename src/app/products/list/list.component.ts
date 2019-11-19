import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IProduct} from '../../iproduct';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: IProduct[] = [{
    id: 1,
    name: 'luvHip',
    price: 3000,
    image: 'assets/product/images/hp-1.jpeg',
  },
    {
      id: 2,
      name: 'Tung3000',
      price: 5000,
      image: 'assets/product/images/hp-2.jpeg',
    },
    {
      id: 3,
      name: 'luvHip',
      price: 2000,
      image: 'assets/product/images/hp-3.jpeg',
    }, {
      id: 4,
      name: 'luvHip',
      price: 3000,
      image: 'assets/product/images/lg-1.jpeg',
    }];
  imgWidth = 100;
  status = true;
  currentId = 0;
  @Input() listProducts: any;
  @Output() setProducts = new EventEmitter();

  constructor() {
  }

  setProduct() {
    return this.setProducts.emit(this.products);
  }

  showHide(event): void {
    this.status = !this.status;
    this.currentId = event.target.value;
    console.log(this.listProducts);
  }

  delete(id) {
    if (confirm('\'re u del?')) {
      this.products.splice(id, 1);
      alert('ok');
    } else {
      alert('fail');
    }
  }

  ngOnInit() {
    this.setProduct();
    this.listProducts = this.products;
  }
}
