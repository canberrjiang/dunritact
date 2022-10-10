namespace API.Model
{
    public class EmailWriteModel
    {
        /// <summary>
        /// The recipient of the email.
        /// </summary>
        /// <value></value>
        public string To { get; set; }
        /// <summary>
        /// plain email body.
        /// </summary>
        /// <value></value>
        public string PlainBody { get; set; }
        /// <summary>
        /// html email body.
        /// </summary>
        /// <value></value>
        public string HtmlBody { get; set; }
    }
}