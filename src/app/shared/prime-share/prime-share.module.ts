import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StepsModule} from 'primeng/steps';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';

const primeImports = [
  StepsModule,
  CardModule,
  DividerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...primeImports
  ],
  exports:[
    ...primeImports
  ]
})
export class PrimeShareModule { }
