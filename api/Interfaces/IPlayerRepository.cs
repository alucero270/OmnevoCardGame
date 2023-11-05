public interface IPlayerRepository
{
    Task<List<PlayerDTO>>  GetAllPlayers();
    Task<PlayerDetailDTO?> GetDetails(int id);

    Task<PlayerDetailDTO> Add(PlayerDetailDTO dto);
    Task<PlayerDetailDTO> Update(PlayerDetailDTO dto);

    Task Delete(int id);

}