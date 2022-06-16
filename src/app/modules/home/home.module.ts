import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PrimeShareModule } from 'src/app/shared/prime-share/prime-share.module';
import { StepImageUploadComponent } from './components/step-image-upload/step-image-upload.component';
import { StepFormComponent } from './components/step-form/step-form.component';
import { StepTabelComponent } from './components/step-tabel/step-tabel.component';
import { StoreModule } from '@ngrx/store';
import { homeReducer, homeStoreFeatureKey } from './state/home.reducer';


@NgModule({
  declarations: [
    HomeComponent,
    StepImageUploadComponent,
    StepFormComponent,
    StepTabelComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimeShareModule,
    StoreModule.forFeature(homeStoreFeatureKey, homeReducer)
  ]
})
export class HomeModule { }
