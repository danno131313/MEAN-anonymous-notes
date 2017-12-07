import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoteformComponent } from './noteform/noteform.component';
import { NotesComponent } from './notes/notes.component';

import { NoteService } from './note.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteformComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
