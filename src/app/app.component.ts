import { Component } from '@angular/core';
import { stuBean } from './studentBean';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Survey';

  constructor() {
  }
}
