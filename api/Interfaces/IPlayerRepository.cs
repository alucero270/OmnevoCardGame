public interface IPlayerRepository
{
    Task<List<PlayerDTO>>  GetAllPlayers();
    Task<PlayerDetailDTO?> GetDetails(int id);
}