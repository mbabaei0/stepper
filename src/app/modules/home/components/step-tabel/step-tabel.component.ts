import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-step-tabel',
  templateUrl: './step-tabel.component.html',
  styleUrls: ['./step-tabel.component.scss']
})
export class StepTabelComponent implements OnInit {
  @Output() selected = new EventEmitter<User>()

  users: User[] = [
    new User('Ernest hemingway', new Date('1995'), 'er@gmail.com', '+159558956'),
    new User('Fyodor Dostoevsky', new Date('1823'), 'fy@gmail.com', '+859557776'),
    new User('Joe DiMaggio', new Date('1999'), 'jo@gmail.com', '+1595598'),
  ];
  cols: any[] = [];

  selectedUser: User | null = null
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'birth', header: 'Birth' },
      { field: 'email', header: 'Email' },
      { field: 'phone', header: 'Phone' }
    ];
  }

  onSave() {
    this.selected.emit(this.selectedUser!)
  }

}
