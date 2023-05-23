import { Injectable } from '@angular/core';

export type Product = {
  id: number;
  product_name: {[lang: string]: string};
  brand: string;
  price_USD: number;
  price_TRY: number;
  description: {[lang: string]: string};
  images: string[];
}
@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor() { }
  async getProducts() {
    const response = await fetch('https://ayatekno.com.tr/api/products/');
    const rawProducts = await response.json();
    const products: Product[] = rawProducts.map(
      (product: any) => ({
        id: product.id,
        product_name: JSON.parse(product.product_name),
        brand: product.brand,
        price_USD: Number.parseInt(product.price_USD),
        price_TRY: Number.parseInt(product.price_TRY),
        description: JSON.parse(product.description),
        images: product.images
      })
    )
    return products;
  }
}
