import { Component, signal } from '@angular/core';
import { InputsChildsComponent } from '../inputs-childs/inputs-childs.component';
import { FormsModule } from '@angular/forms';
import { OutputsChildsComponent } from '../outputs-childs/outputs-childs.component';

@Component({
  selector: 'app-parents',
  standalone: true,
  imports: [InputsChildsComponent,OutputsChildsComponent, FormsModule],
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

  // output
  public outputName = signal("Output: without value")

  handleOutputName(object: string, object2: string ) {
    console.log('Output from child:', object);
    this.list.push({ obj1: object, obj2: object2 });
  }
}
