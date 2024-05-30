import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-outputs-childs',
  standalone: true,
  imports: [],
  templateUrl: './outputs-childs.component.html',
  styleUrl: './outputs-childs.component.css'
})
export class OutputsChildsComponent {
  @Output() public outputName = new EventEmitter<string>();

  public sendOutputName() {
    return this.outputName.emit("Test out-input-component");
  }
}
