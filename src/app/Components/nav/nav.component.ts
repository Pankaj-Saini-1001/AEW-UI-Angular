import { Component, inject} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MatTooltipModule, CommonModule,MatMenuModule, MatBadgeModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  http = inject(HttpClient);

  

  address(){
    const address = localStorage.getItem('address');
    if (address) {
        alert("Address " + address);
    } else {
        alert("Please login");
    }

  }

  order(){

  }

  router = inject(Router);

  logout() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('address');
    this.router.navigate(['/login']);
  }


}
