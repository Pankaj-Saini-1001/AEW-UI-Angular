import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { ChartAccComponent } from '../chart-acc/chart-acc.component';
import { ChartAppComponent } from '../chart-app/chart-app.component';
import { ChartRepComponent } from '../chart-rep/chart-rep.component';
import { WhyComponent } from '../why/why.component';
import { FieldsComponent } from '../fields/fields.component';
import { SeasonalOffersComponent } from '../seasonal-offers/seasonal-offers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, ChartAccComponent, ChartAppComponent, ChartRepComponent, WhyComponent, FieldsComponent, SeasonalOffersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 
}
