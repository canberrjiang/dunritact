using System.Net;
using System.Threading.Tasks;
using API.Interface;
using API.Model;
using Mapster;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    /// <summary>
    /// An API used to send email.
    /// </summary>
    [ApiController]
    [Route("api/email")]
    public class EmailController : ControllerBase
    {

        private readonly ILogger<EmailController> _logger;
        private readonly IEmailService _sendGridService;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="logger"></param>
        /// <param name="sendGrid"></param>
        public EmailController(ILogger<EmailController> logger, IEmailService sendGridService)
        {
            _logger = logger;
            _sendGridService = sendGridService;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="email"> </param>
        /// <returns></returns>
        [HttpPost]
        [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
        public async Task<ActionResult> SendEmailAsync(EmailWriteModel model)
        {
            if (!ModelState.IsValid)
            {
                return ValidationProblem(ModelState);
            }

            var email = model.Adapt<CreateEmail>();
            var result = await _sendGridService.SendEmail(email);
            _logger.LogInformation("Email is sent.");
            return Ok(result);
        }
    }
}
