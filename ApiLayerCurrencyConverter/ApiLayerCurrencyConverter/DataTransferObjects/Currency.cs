using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiLayerCurrencyConverter.DataTransferObjects
{
    public class Currency
    {
        public string currency_name { get; set; }
        public string rate { get; set; }
        public string rate_for_amount { get; set; }
    }
}
