using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace gyakorlat_N17VHP.Controllers
{
   // [Route("api/[controller]")]
    [ApiController]
    public class BoatController : ControllerBase
        

    {
        [HttpGet]
        [Route("questions/all")]
        public IActionResult M1()
        {
            Models.HajosContext context = new();
            var kerdesek = from x in context.Questions select x.Question1;

            return new JsonResult(kerdesek);
        }
    }
}
