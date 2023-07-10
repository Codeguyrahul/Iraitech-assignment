import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  inputIndex: number = 0;
  outputNumber: number | null = null;
  

getNumber(){
  if (this.inputIndex && this.inputIndex >0){
    this.outputNumber = this.calculateSeriesNumber(this.inputIndex);

  }else{
    this.outputNumber =null;
  }
}

calculateSeriesNumber(index: number):number{
  let a = 2;
  let b = 3;

  for (let i = 3; i <= index; i++) {
    const c = a + b;
    a = b;
    b = c;
  }

  return b;
}
}

