import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../Services/wishlist.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {
  wishlist: any[] = [];

  wishlistService = inject(WishlistService)

  ngOnInit(): void {
    this.wishlist = this.wishlistService.getWishlist();
  }
}