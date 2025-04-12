import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';  


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  router = inject(Router);

  moveApp(){
    this.router.navigate(['/shop']);
  }


}
