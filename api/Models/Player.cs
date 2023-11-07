using Newtonsoft.Json;

public class Player 
{
  public int Id { get; set; }
  [JsonProperty("realName")]
  public string? RealName { get; set; }
  [JsonProperty("playerName")]
  public string? PlayerName{get; set; }
  [JsonProperty("asset")]
  public string? Asset { get; set; }
}