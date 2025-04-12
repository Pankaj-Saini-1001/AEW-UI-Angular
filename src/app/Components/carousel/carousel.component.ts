import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  carousel_images = [
    {
      src: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721056856/Croma%20Assets/Small%20Appliances/Stoves%20Cooktops/Images/274590_0_ubqp8o.png?tr=w-400',
      alt: 'First slide',
      caption: 'HAVELLS INDUCTION',
      description: "Havells best inductions are here."
    },
    {
      src: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684950347/Croma%20Assets/Small%20Appliances/Food%20Preparation%20App/Images/218801_0_dlcmtu.png?tr=w-400',
      alt: 'Happy Customer',
      caption: 'HAVELLS JMG',
      description: 'HAVELLS Stilus 500 Watt 4 Jars Juicer Mixer Grinder (LED Indicator, White)'
    },
    {
      src: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1607354622/Croma%20Assets/Small%20Appliances/Room%20Heaters/Images/230348_bjj2q9.png?tr=w-400',
      alt: 'Happy Customer',
      caption: 'ROOM HEATERS',
      description: 'USHA HH3503H 1200 Watts Halogen Room Heater '
    },   
    {
      src: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1706099825/Croma%20Assets/Small%20Appliances/Geysers/Images/211248_0_khlyij.png?tr=w-400',
      alt: 'Happy Customer',
      caption: 'WATER GEYSER',
      description: 'HAVELLS Instanio 3 Litres Instant Water Geyser (3000 Watts, GHWAIAPWB003)'
    },  
    {
      src: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722871898/Croma%20Assets/Small%20Appliances/Kettles/Images/239304_0_kcfpo2.png?tr=w-400',
      alt: 'Happy Customer',
      caption: 'ELECTRIC KETTLES',
      description: 'HADEN Perth Slate 3000 Watt 1.7 Litre Electric Kettle with Boil Dry Protection (Grey)'
    }
  ];


}
