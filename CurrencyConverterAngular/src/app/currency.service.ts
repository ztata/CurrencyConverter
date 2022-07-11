import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  mockData = new Map([
    ['AUD', 'Australian Dollars'],
    ['USD', 'US Dollars'],
    ['CAD', 'Canadian Dollars']
  ]);

  private conversionApiUri = 'https://localhost:44375/api/Currencyconversion';
  private listApiUri = 'https://localhost:44375/api/currencylist';

  ReturnCurrencyList() {
    return this.http.get<any[]>(`${this.listApiUri}`);
  }

  ConvertCurrency(from: string, to: string, amount: string) {
    return this.http.get(`${this.conversionApiUri}?currencyFrom=${from}&currencyTo=${to}&amount=${amount}`);

  }
}
