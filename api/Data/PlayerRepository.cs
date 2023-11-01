public interface IPlayerRepository
{
    Task<List<PlayerDTO>> GetAllPlayers();
    Task<PlayerDetailDTO?> GetDetails(int id);
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

    public async Task<PlayerDetailDTO?> GetDetails(int id)
    {
        var e = await context.Players.SingleOrDefaultAsync(
            p => p.Id == id);
        if (e == null)
            return null;
        return new PlayerDetailDTO(e.Id, e.RealName, e.PlayerName, e.Asset);
    }
}