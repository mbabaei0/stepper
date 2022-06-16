import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { AppSotre } from 'src/app/shared/models/sotre.model';
import { UserForm } from '../../models/form.model';
import { User } from '../../models/user.model';
import { decrement, increment, setForm, setImage, setUser } from '../../state/home.action';
import { homeStoreFeatureKey } from '../../state/home.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  steps = [
    { label: 'Upload Photo' },
    { label: 'Fill Form' },
    { label: 'Select From tabel' },
    { label: 'Result' },
  ];

  activeIndex$: Observable<number> = this.store.select(homeStoreFeatureKey).pipe(map(s => s.activeIndex));

  constructor(private readonly store: Store<AppSotre>) {

  }

  ngOnInit(): void {
  }

  onFileUploaded(ev: File){
    this.store.dispatch(setImage({file: ev}));
    this.incrementStep()
  }
  onFormSubmitted(ev:UserForm){
    this.store.dispatch(setForm({form: ev}));
    this.incrementStep()
  }
  onUserSelected(ev:User){
    this.store.dispatch(setUser({user: ev}));
    this.incrementStep()
  }
  incrementStep() {
    this.store.dispatch(increment());
  }

  decrementStep() {
    this.store.dispatch(decrement());
  }



}
