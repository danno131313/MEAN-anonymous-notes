import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes = [];
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
      this._noteService.notes.subscribe(
          (notes) => { this.notes = notes; }
      );
  }

}
