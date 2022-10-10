using System;
using System.Threading.Tasks;
using API.Interface;
using API.Model;
using Microsoft.Extensions.Configuration;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace API.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _config;
        public EmailService(IConfiguration config)
        {
            _config = config;
        }

        public async Task<bool> SendEmail(CreateEmail email)
        {
            var apiKey = _config["SendGrid:Key"];
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress(_config["SendGrid:Sender"]);
            var subject = _config["SendGrid:Subject"];
            var to = new EmailAddress(_config["SendGrid:Sender"]);
            var plainTextContent = email.PlainBody;
            var htmlContent = email.HtmlBody;
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
            return response.IsSuccessStatusCode;
        }
    }
}