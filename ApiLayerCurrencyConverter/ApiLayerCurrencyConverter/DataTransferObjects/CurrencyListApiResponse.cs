using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiLayerCurrencyConverter.DataTransferObjects
{
    public class CurrencyListApiResponse
    {
        public string Symbol { get; set; }
        public string Name { get; set; }

        //public CurrencyListApiResponse(string symbol, string name)
        //{
        //    symbol = Symbol;
        //    name = Name;
        //}
    }
}
