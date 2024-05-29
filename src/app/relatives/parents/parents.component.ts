import { Component } from '@angular/core';
import { InputsChildsComponent } from '../inputs-childs/inputs-childs.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parents',
  standalone: true,
  imports: [InputsChildsComponent, FormsModule],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.css',
})
export class ParentsComponent {
  public list = <any>[];

  public inputValue: string = '';
  // segundo input forma simples
  public secondValue: string = '';

  handleInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
  logValue() {
    console.log(this.inputValue);
    this.list.push({ obj1: this.inputValue, obj2: this.secondValue });
  }
}
