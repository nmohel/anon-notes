import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  note = {text: ''};

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  }

  addNote() {
    this._apiService.addNote(this.note);
    this.note = {text: ''};
  }

}
