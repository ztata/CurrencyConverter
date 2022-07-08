using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiLayerCurrencyConverter.DataTransferObjects
{
    public class CurrencyListApiResult
    {
        public string status { get; set; }
        public CurrencyList currencies { get; set; }
    }
}
