import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { topBarComponent } from './shared/topBar/topBar.component';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true, 
  imports: [ RouterOutlet, topBarComponent]
})
export class AppComponent implements OnInit {
  title: string = 'mediumclone_perso'

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser())
  }
  
}
