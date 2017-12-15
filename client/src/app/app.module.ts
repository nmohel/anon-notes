import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteListComponent } from './note-list/note-list.component';

import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
