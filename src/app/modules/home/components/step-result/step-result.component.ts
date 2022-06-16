import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSotre } from 'src/app/shared/models/sotre.model';
import { homeStoreFeatureKey } from '../../state/home.reducer';

@Component({
  selector: 'app-step-result',
  templateUrl: './step-result.component.html',
  styleUrls: ['./step-result.component.scss']
})
export class StepResultComponent implements OnInit {

  result$ = this.store.select(homeStoreFeatureKey);

  constructor(private readonly store: Store<AppSotre>) {

  }

  ngOnInit(): void {
  }

}
