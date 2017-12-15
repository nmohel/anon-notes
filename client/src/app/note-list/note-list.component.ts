import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  // notes = [{text: 'something', createdAt: Date.now()}, {text: 'another thing', createdAt: '08/19/2017'}];
  notes;

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this._apiService.notes.subscribe(
      (data) => this.notes = data
    );
    this._apiService.getNotes();
  }

}
