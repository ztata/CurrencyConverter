import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currencyMap = new Map();

  currencyArray: any;

  conversionForm = new FormGroup({
    currencyFrom: new FormControl('', [Validators.required]),
    currencyTo: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required])
  })

  convertedValue: any;

  currencyFromName: string = "";

  currencyToName: string = "";

  currencyFromCode: string = "";

  currencyToCode: string = "";


  constructor(private service: CurrencyService, private http: HttpClient) { }

  ngOnInit() {

    this.service.ReturnCurrencyList().subscribe(data => {
      this.currencyArray = data.sort((a, b) => a.symbol.localeCompare(b.symbol))
    })
  }

  CalculateConversion() {
    this.currencyFromName = this.conversionForm.value.currencyFrom.substring(3);
    this.currencyToName = this.conversionForm.value.currencyTo.substring(3);
    this.currencyFromCode = this.conversionForm.value.currencyFrom.substring(0, 3);
    this.currencyToCode = this.conversionForm.value.currencyTo.substring(0, 3);
    this.service.ConvertCurrency(this.currencyFromCode, this.currencyToCode, this.conversionForm.value.amount.toString()).subscribe(data => this.convertedValue = data);
  }

}
