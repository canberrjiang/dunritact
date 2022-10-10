using System.Threading.Tasks;
using API.Model;

namespace API.Interface
{
    public interface IEmailService
    {
        Task<bool> SendEmail(CreateEmail email);
    }
}