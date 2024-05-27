import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentsComponent } from './relatives/parents/parents.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentsComponent],
  template: `
  <app-parents/>
  `
})
export class AppComponent {
  title = 'angular-pratic';
}
