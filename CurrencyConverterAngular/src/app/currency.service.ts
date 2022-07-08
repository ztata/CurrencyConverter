import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() {
    this.mockData
  }

   mockData = new Map([
    ['AUD', 'Australian Dollars'],
    ['USD', 'US Dollars'],
    ['CAD','Canadian Dollars']
   ]);
  
}
