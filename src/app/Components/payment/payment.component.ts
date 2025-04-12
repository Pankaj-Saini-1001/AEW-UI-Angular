import { Component, inject, OnInit } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { WishlistService } from '../../Services/wishlist.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, MatStepperModule, MatRadioModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {

  product :any[] = [];

  service = inject(WishlistService)

  ngOnInit(): void {
    this.product = this.service.getWishlist();
  }

  showField : boolean = false;
  addAdd(){
    this.showField = !this.showField;
  }

  router = inject(Router)
  onSubmit(): void {
    this.router.navigate(['/shop'])
  }


  
}