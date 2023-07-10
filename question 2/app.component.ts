import { Component ,ComponentFactoryResolver,ViewChild,ViewContainerRef} from '@angular/core';
import { ComponentXComponent } from './component-x/component-x.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  xCount = 0;
  // @ViewChild('container', { read: ViewContainerRef })
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

 

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  addComponentX() {
    this.xCount++;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentXComponent);
    const componentRef = this.container.createComponent(componentFactory);
    componentRef.instance.name = `X${this.xCount}`;
    const title = 'Your App Title';
  }
}
