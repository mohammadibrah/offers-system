import { Component } from '@angular/core';
import { ProductsApiService } from '../services/products-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { TableItem } from '../data-table/data-table.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  columns: string[] = ['Name', 'Description', 'Price', 'Quantity', 'Category', 'Image'];
  data: TableItem[] = [
    { name: 'John Doe', age: 25 },
    { name: 'Jane Smith', age: 30 },
    { name: 'Bob Johnson', age: 40 }
  ];

  updateTable(): void {
    this.columns = ['name1', 'age1'];
    this.products = [
      { name: 'John Doe', age: 25,  actions: [{ label: 'Edit', onClick: () => this.editRow(0) }, { label: 'Add', onClick: () => this.editRow(10) }], imageUrl: 'https://picsum.photos/200', },
      { name: 'Jane Smith', age: 30,  actions: [{ label: 'Edit', onClick: () => this.editRow(1) }], imageUrl: 'https://picsum.photos/200', },
      { name: 'Bob Johnson', age: 40,  actions: [{ label: 'Edit', onClick: () => this.editRow(2) }], imageUrl: 'https://picsum.photos/200', }
    ];
  }
  editRow(arg0: number) {
    console.log('editRow', arg0);
    
  }



  products: any[] = [];
  constructor(private api: ProductsApiService) {


  }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.api.getProducts().then(products => {
      this.products = products;
      console.log(this.products);
    });
  }
}
