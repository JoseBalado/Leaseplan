using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Leaseplan.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("{currencyCode1}/{currencyCode2}")]
        public CurrencyExchange Get(string currencyCode1, string currencyCode2)
        {
            var currencyCode = $"{currencyCode1}/{currencyCode2}";
            double value;
            switch (currencyCode)
            {
                case "USD/USD":
                    value = 1.0;
                    break;
                case "USD/EUR":
                    value = 0.82;
                    break;
                case "USD/GBP":
                    value = 0.74;
                    break;

                case "EUR/EUR":
                    value = 1.0;
                    break;
                case "EUR/USD":
                    value = 1.22;
                    break;
                case "EUR/GBP":
                    value = 0.90;
                    break;

                case "GBP/GBP":
                    value = 1.0;
                    break;
                case "GBP/USD":
                    value = 1.36;
                    break;
                case "GBP/EUR":
                    value = 1.11;
                    break;

                default:
                    value = 1.0;
                    break;
            }

            return new CurrencyExchange
            {
                CurrencyCode = currencyCode,
                Value = value
            };
        }
    }
}
