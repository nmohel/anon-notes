import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  notes: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  getNotes() {
    this._http.get('/notes').subscribe(
      (result: any[]) => {
        this.notes.next(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addNote(note) {
    this._http.post('/notes', note).subscribe(
      (result) => {
        this.getNotes();
      },
      error => console.log(error)
    );
  }

}
