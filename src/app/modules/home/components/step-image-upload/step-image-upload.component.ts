import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-image-upload',
  templateUrl: './step-image-upload.component.html',
  styleUrls: ['./step-image-upload.component.scss']
})
export class StepImageUploadComponent implements OnInit {

  @Output() fileUploaded = new EventEmitter<File>()
  constructor() { }

  ngOnInit(): void {
  }
  myUploader(ev:any){
    this.fileUploaded.emit(ev.files[0])
  }


}
