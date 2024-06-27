import { Component , inject} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'ngApp';
  id = '92';
  count$?:Observable<number>;
  private store = inject(Store);

  constructor()
  {
    this.count$ = this.store.select('counter');
  }
}
