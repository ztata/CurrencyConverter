using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiLayerCurrencyConverter.DataTransferObjects;
using Flurl.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ApiLayerCurrencyConverter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrencyConversionController : ControllerBase
    {
        // GET: api/<CurrencyController>
        [HttpGet]
        public float Get(string currencyFrom, string currencyTo, string amount)
        {
            var builder = new ConfigurationBuilder();
            builder.AddJsonFile("appsettings.json", optional: false);
            var configuration = builder.Build();

            var apiKey = configuration.GetValue<string>("ApiKeys:RapidApiKey");
            var ApiHostCurrency = configuration.GetValue<string>("ApiKeys:RapidApiHostCurrencyConverter");

            var apiUri = $"https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from={currencyFrom.Trim()}&to={currencyTo.Trim()}&amount={amount.Trim()}";
                  
            var apiTask = apiUri.WithHeaders(new
            {
                X_RapidAPI_Host = ApiHostCurrency,
                X_RapidAPI_Key = apiKey
            }).GetJsonAsync<ApiResult>();
            apiTask.Wait();

            // Currency ratesResult = apiTask.Result.rates;
            Dictionary<string, Currency> ratesResult = apiTask.Result.rates;
            float result = float.Parse(ratesResult[$"{currencyTo}"].rate_for_amount);

            if (apiTask.Result.status.Trim().ToLower() == "success")
            {
                return result;
            }
            else
            {
                return -1;
            }
        }
    }
}
