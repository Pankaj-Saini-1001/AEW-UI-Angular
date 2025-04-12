import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlist: any[] = [];

  addToWishlist(product: any) {
    this.wishlist.push(product);
  }

  getWishlist() {
    return this.wishlist;
  }

}
