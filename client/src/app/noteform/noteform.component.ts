import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-noteform',
  templateUrl: './noteform.component.html',
  styleUrls: ['./noteform.component.css']
})
export class NoteformComponent implements OnInit {
  note = {content: ''};
  constructor(private _noteService: NoteService) {
  }

  ngOnInit() {
  }

  addNote() {
      this._noteService.addNote(this.note);
      this.note.content = '';
  }
}
