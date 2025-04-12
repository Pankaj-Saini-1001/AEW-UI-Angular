import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-seasonal-offers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './seasonal-offers.component.html',
  styleUrl: './seasonal-offers.component.css'
})
export class SeasonalOffersComponent {

  router= inject(Router)

  move(){
    this.router.navigate(['/season']);
  }

}
