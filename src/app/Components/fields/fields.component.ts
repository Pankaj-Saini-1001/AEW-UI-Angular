import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fields',
  standalone: true,
  imports: [],
  templateUrl: './fields.component.html',
  styleUrl: './fields.component.css'
})
export class FieldsComponent {

  router = inject(Router);

  moveAcc(){
    this.router.navigate(['/services']);
  }

  moveApp(){
    this.router.navigate(['/shop']);
  }

  moveRep(){
    this.router.navigate(['/services']);
  }

}
