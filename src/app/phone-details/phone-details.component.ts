import { Component , inject, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../state/counter/counter.actions';
import Swal from 'sweetalert2';
import Toast from 'sweetalert2';
@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrl: './phone-details.component.css'
})
export class PhoneDetailsComponent {
  private store = inject(Store);
   id: any;
   items: any;
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
   constructor(private router: ActivatedRoute){};
  ngOnInit(){
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.items = this.phone.filter(e => e.id === this.id);
    console.log(this.items);
  }

  increment(){
    this.store.dispatch(increment())
    const Toast = Swal.mixin({
      toast: true,
      position: "top-start",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Item added to cart successfully"
    });
  }
}
