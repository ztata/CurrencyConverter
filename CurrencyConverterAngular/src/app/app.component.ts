import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from './currency.service';
import { ICUrrency } from './ICurrency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CurrencyConverterAngular';
  currencyMap = new Map();
  currencyArray: any = [];

  conversionForm = new FormGroup({
    currencyFrom: new FormControl('', [Validators.required]),
    currencyTo: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required])
  })
  constructor(private service: CurrencyService){}

  ngOnInit(){
    this.currencyMap = this.service.mockData;
    this.currencyArray = Array.from(this.currencyMap, ([key, value]) => {
      return <ICUrrency> 
      {
        symbol:key,
        name:value
      };
    });    
  }

  LogCurrency(){
    console.log(this.currencyArray);
  }

  CalculateConversion(){
    console.log(this.conversionForm.value)
  }
}
