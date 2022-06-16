import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepImageUploadComponent } from './step-image-upload.component';

describe('StepImageUploadComponent', () => {
  let component: StepImageUploadComponent;
  let fixture: ComponentFixture<StepImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepImageUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
