import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-inputs-childs',
  standalone: true,
  imports: [],
  templateUrl: './inputs-childs.component.html',
  styleUrl: './inputs-childs.component.css'
})
export class InputsChildsComponent {
  public inputToSet =  signal("Teste signal")

  @Input({
    required:true
  }) set valueTest(value: string) {
    this.inputToSet.set(value)
  }
}
