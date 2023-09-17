using Newtonsoft.Json;

namespace SmoothieShopAPI.Models.DTOs
{
    public class CustomerDTO
    {
        [JsonProperty("id", Required = Required.Default)]
        public int ID { get; set; }
        [JsonProperty("first_name", Required = Required.Always)]
        public string FirstName { get; set; }
        [JsonProperty("last_name", Required = Required.Always)]
        public string LastName { get; set; }
        [JsonProperty("phone", Required = Required.Always)]
        public string Phone { get; set; }
        [JsonProperty("user_name", Required = Required.Always)]
        public string Username { get; set; }
        [JsonProperty("password", Required = Required.Always)]
        public string Password { get; set; }
        [JsonProperty("address_line_1", Required = Required.Always)]
        public string AddressLine1 { get; set; }
        [JsonProperty("address_line_2", Required = Required.AllowNull)]
        public string? AddressLine2 { get; set; }
        [JsonProperty("city", Required = Required.Always)]
        public string City { get; set; }
        [JsonProperty("zip", Required = Required.Always)]
        public string Zip { get; set; }
        [JsonProperty("state", Required = Required.Always)]
        public string State { get; set; }
        [JsonProperty("country", Required = Required.Always)]
        public string Country { get; set; }
        [JsonProperty("email", Required = Required.Always)]
        public string Email { get; set; }
    }
}
