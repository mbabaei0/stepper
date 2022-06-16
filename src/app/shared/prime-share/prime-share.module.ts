import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StepsModule} from 'primeng/steps';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {FileUploadModule} from 'primeng/fileupload';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

const primeImports = [
  StepsModule,
  CardModule,
  DividerModule,
  FileUploadModule,
  InputNumberModule,
  CalendarModule,
  DropdownModule,
  InputMaskModule,
  ButtonModule,
  TableModule
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
