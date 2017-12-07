import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoteService {

  notes = new BehaviorSubject([]);

  constructor(private _http: HttpClient) {
      this.retrieveNotes();
  }

  retrieveNotes() {
      this._http.get('/notes').subscribe(
        (note: any[]) => { this.notes.next(note); }
      );
  }

  addNote(note) {
    console.log(note);
    this._http.post('/addNote', note).subscribe((res) => {
        this.retrieveNotes();
    });
  }

  getNotes() {
      this._http.get('/notes').subscribe(res => {
        console.log(res);
      });
  }

}
