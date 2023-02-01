import { Component, OnInit } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pruebaUnitaria';

  ngOnInit(){
    let calculator = new Calculator();
    let result = calculator.multiply(5,4);
    console.log(result === 20);// Test pase
    console.log(result !== 9); // Test pase

    let result2 = calculator.divide(6,3);
    console.log(result2 === 2);// Test pase
    console.log(result2 !== 100); // Test pas

    let result3 = calculator.divide(6,0);
    console.log(result3 === null);

  }
}
