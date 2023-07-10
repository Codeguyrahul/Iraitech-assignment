import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-component-x',
  templateUrl: './component-x.component.html',
  styleUrls: ['./component-x.component.css']
})
export class ComponentXComponent {
  @Input()
  name!: string;
  ys: string[] = [];

  addComponentY() {
    const yName = `Y${this.ys.length + 1}`;
    this.ys.push(yName);

}
}