import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserForm, UserStatus } from '../../models/form.model';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss']
})
export class StepFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<UserForm>()

  form: FormGroup;


  minDate = this.getDatesAfterToday(1);
  maxDate = this.getDatesAfterToday(5);


  USER_STAT = UserStatus;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      validAmount: [null, Validators.required],
      validDate: [null, Validators.required],
      status:[UserStatus.Active],
      sourceOfFound:[null, Validators.required]
    })
   }

  ngOnInit(): void {
  }

  private getDatesAfterToday(day:number){
    const today = new Date();
    return new Date(today.setDate(today.getDate()+day));
  }

  onSave(){
    this.submitted.emit(this.form.value)
  }

}
