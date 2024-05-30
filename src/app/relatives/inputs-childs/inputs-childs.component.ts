import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-inputs-childs',
  standalone: true,
  imports: [],
  templateUrl: './inputs-childs.component.html',
  styleUrl: './inputs-childs.component.css',
})
export class InputsChildsComponent {
  public inputToSet = signal('Teste signal');

  @Input({
    required: true,
  })
  set firstInput(value: string) {
    this.inputToSet.set(value);
  }

  //  segundo input forma simples
  //@input simple form
  @Input({ required: true }) secondInput: string = '';
}
