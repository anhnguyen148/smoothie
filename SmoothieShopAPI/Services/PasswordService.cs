namespace SmoothieShopAPI.Services
{
    /// <summary>
    /// The service for password security actions
    /// </summary>
    public interface IPasswordService {
        public string EncryptPassword(string password);
        public string DecryptPassword(string passwordHash);
    }

    public class PasswordService : IPasswordService
    {
        public PasswordService() { }

        public string DecryptPassword(string passwordHash)
        {
            System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
            System.Text.Decoder utf8Decoder = encoder.GetDecoder();
            byte[] toDecodeByte = Convert.FromBase64String(passwordHash);
            int charCount = utf8Decoder.GetCharCount(toDecodeByte, 0, toDecodeByte.Length);
            char[] decodedChar = new char[charCount];
            utf8Decoder.GetChars(toDecodeByte, 0, toDecodeByte.Length, decodedChar, 0);
            string result = new string(decodedChar);
            return result;
        }

        public string EncryptPassword(string password)
        {
            try
            {
                byte[] encryptData = new byte[password.Length];
                encryptData = System.Text.Encoding.UTF8.GetBytes(password);
                string encodedData = Convert.ToBase64String(encryptData);
                return encodedData;
            } catch (Exception e)
            {
                throw new Exception("Error in base64Encode" + e.Message);
            }
        }
    }
}
