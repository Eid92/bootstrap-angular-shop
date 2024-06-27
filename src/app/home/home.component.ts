import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  phone = [
    { id: 1, title: 'phone', name: 'Iphone 15 pro', price: 3800, description: 'Latest iPhone model with advanced features.', img: '/assets/images/iphon14.jpg' },
    { id: 2, title: 'phone', name: 'Iphone 14 pro', price: 2700, description: 'High-performance iPhone with excellent camera.', img: '/assets/images/iphon.jpg' },
    { id: 4, title: 'phone', name: 'Galaxy note 20', price: 100, description: 'Affordable and reliable Nokia phone buy now!.', img: '/assets/images/Galaxy-note.png' },
    { id: 3, title: 'phone', name: 'Samsung', price: 1200, description: 'Samsung Note series with powerful S Pen.', img: '/assets/images/Galaxy.jpg' },
    { id: 5, title: 'phone', name: 'Iphone-X', price: 100, description: 'Affordable and reliable Nokia phone buy now!.', img: '/assets/images/Iphone-xr.png' },
    { id: 6, title: 'phone', name: 'Samsung S20', price: 100, description: 'Affordable and reliable Nokia phone buy now!.', img: '/assets/images/sansungs20.png' },
    { id: 7, title: 'phone', name: 'Nokia', price: 100, description: 'Affordable and reliable Nokia phone buy now!.', img: '/assets/images/Nokia23.png' },
    { id: 8, title: 'phone', name: 'Nokia', price: 100, description: 'Affordable and reliable Nokia phone buy now!.', img: '/assets/images/Nokia23.png' }
  ];
  itemsToShow = 4;
  getPhoneItems(): any[]{
   return this.phone.slice(0, this.itemsToShow)
  }
}
