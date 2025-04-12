import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WishlistService } from '../../Services/wishlist.service';
import { YesNoComponent } from '../yes-no/yes-no.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule,  FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{


   // getting all appliances form allservice

   products : any[] = [];

   http = inject(HttpClient);

   ngOnInit(): void {
    
    this.http.get("http://localhost:8001/item/get").subscribe((res : any) => {
      this.products = res;
    })
  }
 
   // Adding to MyCart
 
   wishlist: any[] = [];
 
   dialog = inject(MatDialog)
   wishlistService = inject(WishlistService)
 
   towishlist(product : any): void {
     const dialogRef = this.dialog.open(YesNoComponent, {
       width: '400px' ,
       data: product  // Pass the product data to the dialog
     });
 
     dialogRef.afterClosed().subscribe(result => {
       if (result) {
         alert('Product added to wishlist');
         this.wishlistService.addToWishlist(product); // Add the product to the wishlist in the service
       }
     });
   }
 
 
   // Searching
 
   searchData: string = '';

   selectedItem: string = '';
 
  

  item(x: string): void {
    this.selectedItem = x;
  }


  //  get filteredproducts(){
  //    return this.products.filter(product =>
  //      product.name.toLowerCase().includes(this.searchData.toLowerCase())
  //    );
  //  }

  // get filteredproducts() {
  //   if (!this.selectedItem) {
  //   return this.products;   }         // Return all cars  untill button is not clicked .
  //   return this.products.filter(product => 
  //   product.id.toLowerCase() === this.selectedItem.toLowerCase());
  // }

  get filteredproducts() {

    if (this.searchData) {
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchData.toLowerCase())
      );
    }
  
    if (this.selectedItem) {
      return this.products.filter(product =>
        product.id.toLowerCase() === this.selectedItem.toLowerCase()
      );
    }
  
    return this.products;
  }
   


}
