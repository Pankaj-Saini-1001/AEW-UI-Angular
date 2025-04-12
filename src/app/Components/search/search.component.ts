import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  data : any [] = [];

  http = inject(HttpClient)

  ngOnInit(): void {
    this.http.get("http://localhost:8001/item/get").subscribe((res : any) => {
      this.data = res;
    })
  }

  
}
