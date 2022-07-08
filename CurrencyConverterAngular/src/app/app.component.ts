import { HttpClient } from '@angular/common/http';
import { Component, Testability } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
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
  currencyArray: any;
  testArray: any;
  conversionForm = new FormGroup({
    currencyFrom: new FormControl('', [Validators.required]),
    currencyTo: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required])
  })
  convertedValue: any;
  constructor(private service: CurrencyService, private http: HttpClient){}

  ngOnInit(){
    /* this.currencyMap = this.service.mockData;
    this.currencyArray = Array.from(this.currencyMap, ([key, value]) => {
      return <ICUrrency> 
      {
        symbol:key,
        name:value
      };
    });  */   
    this.service.ReturnCurrencyList().subscribe(data =>{
      console.log(data)
      this.currencyArray = data
    })
    
  }

  LogCurrency(){
    console.log(this.currencyArray);
  }

  CalculateConversion(){
    console.log(this.conversionForm.value)
    this.service.ConvertCurrency(this.conversionForm.value.currencyFrom, this.conversionForm.value.currencyTo, this.conversionForm.value.amount.toString()).subscribe(data => this.convertedValue = data);
    console.log(this.convertedValue)

  }

  getCurrencyList(){
    console.log("called get currency list in app component")
       
  this.service.ReturnCurrencyList().subscribe(data =>{
    console.log(data)
    this.testArray = data
  }

  )

  console.log(this.testArray)
  }


}
