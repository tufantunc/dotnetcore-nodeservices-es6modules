using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.NodeServices;
using RunJSInDotNetCoreMvc.Models;

namespace RunJSInDotNetCoreMvc.Controllers
{
    public class HomeController : Controller
    {
        public async Task<IActionResult> Index([FromServices] INodeServices nodeServices)
        {
            var dummyWeatherData = new
            {
                cityName = "Istanbul",
                detail = "Rainy",
                highValue = 14,
                lowValue = 9
            };

            var options = new
            {
                componentName = "WeatherCardTemplate.js",
                data = dummyWeatherData
            };

            ViewData["ResultFromNode"] = await nodeServices.InvokeAsync<string>("wwwroot/js/ComponentRunner.js", options);
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
