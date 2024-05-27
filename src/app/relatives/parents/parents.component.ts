import { Component } from '@angular/core';
import { InputsChildsComponent } from '../inputs-childs/inputs-childs.component';

@Component({
  selector: 'app-parents',
  standalone: true,
  imports: [InputsChildsComponent],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.css'
})
export class ParentsComponent {
  public list = <any>[]

  public inputValue: string = '';

  handleInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  logValue() {
    console.log(this.inputValue);
    this.list.push(this.inputValue)
  }
}
