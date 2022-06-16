import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { AppSotre } from 'src/app/shared/models/sotre.model';
import { decrement, increment } from '../../state/home.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  steps = [
    { label: 'Upload Photo' },
    { label: 'Fill Form' },
    { label: 'Select From tabel' }
  ];

  activeIndex$: Observable<number> = this.store.select('home').pipe(map(s => s.activeIndex));

  constructor(private readonly store: Store<AppSotre>) {

  }

  ngOnInit(): void {
  }


  inc() {
    this.store.dispatch(increment());
  }

  dec() {
    this.store.dispatch(decrement());
  }



}
