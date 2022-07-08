import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICUrrency } from './ICurrency';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {
    
  }

   mockData = new Map([
    ['AUD', 'Australian Dollars'],
    ['USD', 'US Dollars'],
    ['CAD','Canadian Dollars']
   ]);
   

   private conversionApiUri = 'https://localhost:44375/api/Currencyconversion';
   private listApiUri = 'https://localhost:44375/api/currencylist';

   

   ReturnCurrencyList(){
    console.log('called return currency list in currency service');
    console.log(this.listApiUri)
    return this.http.get<any[]>(`${this.listApiUri}`);
   }

   ConvertCurrency(from: string, to: string, amount: string){
    console.log(from)
    console.log(to)
    console.log(amount)
    return this.http.get(`${this.conversionApiUri}?currencyFrom=${from}&currencyTo=${to}&amount=${amount}`);

   }
}
