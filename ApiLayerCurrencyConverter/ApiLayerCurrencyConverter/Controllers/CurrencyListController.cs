using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Flurl.Http;
using ApiLayerCurrencyConverter.DataTransferObjects;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ApiLayerCurrencyConverter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrencyListController : ControllerBase
    {
        // GET: api/<CurrencyListController>
        [HttpGet]
        public List<CurrencyListApiResponse> ReturnListOfCurrencies()
        {
            var builder = new ConfigurationBuilder();
            builder.AddJsonFile("appsettings.json", optional: false);
            var configuration = builder.Build();

            var apiKey = configuration.GetValue<string>("ApiKeys:RapidApiKey");
            var ApiHostCurrency = configuration.GetValue<string>("ApiKeys:RapidApiHostCurrencyConverter");

            string apiUri = "https://currency-converter5.p.rapidapi.com/currency/list";

            var apiTask = apiUri.WithHeaders(new
            {
                X_RapidAPI_Host = ApiHostCurrency,
                X_RapidAPI_Key = apiKey
            }).GetJsonAsync<CurrencyListApiResult>();
            apiTask.Wait();

            
            Dictionary<string, string> result = new Dictionary<string, string>();
            foreach (var item in apiTask.Result.currencies)
            {
                result.Add(item.Key, item.Value);
            }


            List<CurrencyListApiResponse> response = result.Select(p => new CurrencyListApiResponse { Symbol = p.Key, Name = p.Value }).ToList();

           

            return response;
        }

      
    }
}
