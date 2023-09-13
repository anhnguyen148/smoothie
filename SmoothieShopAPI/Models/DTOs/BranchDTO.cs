using Newtonsoft.Json;

namespace SmoothieShopAPI.Models.DTOs
{
    public class BranchDTO
    {
        [JsonProperty("id", Required = Required.Default)]
        public int? ID { get; set; }
        [JsonProperty("name", Required = Required.Always)]
        public string? Name {  get; set; }
        [JsonProperty("location", Required = Required.Always)]
        public string? Location { get; set; }
        [JsonProperty("phone", Required = Required.Always)]
        public string? Phone { get; set; }

        public BranchDTO() { }
    }
}
