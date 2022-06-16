import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTabelComponent } from './step-tabel.component';

describe('StepTabelComponent', () => {
  let component: StepTabelComponent;
  let fixture: ComponentFixture<StepTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
