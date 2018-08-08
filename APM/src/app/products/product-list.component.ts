import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[] = [
        
    ];

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        console.log('In OnInit')
    }

    performFilter(filterBy: string) : IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}