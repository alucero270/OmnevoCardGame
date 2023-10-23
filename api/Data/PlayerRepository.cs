public interface IPlayerRepository
{
    Task<List<PlayerDTO>> GetAllPlayers();
}
public class PlayerRepository : IPlayerRepository
{
    private readonly PlayerContext context;

    public PlayerRepository(PlayerContext context)
    {
        this.context = context;
    }

    public async Task<List<PlayerDTO>> GetAllPlayers()
    {
        return await context.Players.Select(p => new PlayerDTO(p.Id, p.RealName, p.PlayerName, p.Asset)).ToListAsync();
    }
}