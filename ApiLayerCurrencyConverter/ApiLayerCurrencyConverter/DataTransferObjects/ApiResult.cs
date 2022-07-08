using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiLayerCurrencyConverter.DataTransferObjects
{
    public class ApiResult
    {
        public string base_currency_code { get; set; }
        public string base_currency_name { get; set; }
        public string amount { get; set; }
        public string updated_date { get; set; }
        public  Rates rates { get; set; }
        public string status { get; set; }

    }
}
