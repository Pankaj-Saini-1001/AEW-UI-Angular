import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-season',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './season.component.html',
  styleUrl: './season.component.css'
})
export class SeasonComponent implements OnInit {

   products : any[] = [];

   http = inject(HttpClient);
 
  ngOnInit(): void {
    this.http.get("http://localhost:8001/item/get").subscribe((res : any) => {
      this.products = res;
    })
  }

   get filteredproducts(){
    return this.products.filter(product => 
      product.specialId === 'winter');
   }

}
