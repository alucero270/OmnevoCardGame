
using Newtonsoft.Json;

public class PlayerRepository : IPlayerRepository
{
    private readonly PlayerContext context;


    public PlayerRepository(PlayerContext context)
    {
        this.context = context;
    }

    private static PlayerDetailDTO EntityToDto(Player e)
    {
        return new PlayerDetailDTO(e.Id, e.RealName, e.PlayerName, e.Asset);
    }

    private static void DtoToEntity(PlayerDetailDTO dto, Player e)
    {
        e.Id = dto.Id;
        e.RealName = dto.RealName;
        e.PlayerName = dto.PlayerName;
        e.Asset = dto.Asset;
    }

public async Task<List<PlayerDTO>> GetAllPlayers(string sortOrder)
{
    switch (sortOrder)
    {
<<<<<<< HEAD
        // Read JSON data from the URL and update the database
        var baseURL = "https://opensource.aoe.com/the-card-game-data/player.json";
        var client = new HttpClient();
        try
        {
            var httpResponseMessage = await client.GetAsync(baseURL);
            if (httpResponseMessage.IsSuccessStatusCode)
            {
                string jsonResponse = await httpResponseMessage.Content.ReadAsStringAsync();
                var playersFromUrl = JsonConvert.DeserializeObject<List<PlayerDetailDTO>>(jsonResponse);

                // Remove existing players from the database
                context.Players.RemoveRange(await context.Players.ToListAsync());

                if (playersFromUrl != null)
                {

                    // Add players from the URL to the database
                    foreach (var playerDto in playersFromUrl)
                    {
                        var entity = new Player();
                        DtoToEntity(playerDto, entity);
                        context.Players.Add(entity);
                    }
                }

                await context.SaveChangesAsync();
            }
        }
        catch (Exception e)
        {
            // Handle the exception (e.g., log it)
            Console.WriteLine(e);
        }

        // Return all players from the database
        return await context.Players.Select(p => new PlayerDTO(p.Id, p.RealName, p.PlayerName, p.Asset)).ToListAsync();
=======
        case "desc":
            return await context.Players
                .OrderByDescending(p => p.RealName)
                .Select(p => new PlayerDTO(p.Id, p.RealName, p.PlayerName, p.Asset))
                .ToListAsync();
        default:
            return await context.Players
                .OrderBy(p => p.RealName)
                .Select(p => new PlayerDTO(p.Id, p.RealName, p.PlayerName, p.Asset))
                .ToListAsync();
>>>>>>> main
    }
}
    public async Task<PlayerDetailDTO?> GetDetails(int id)
    {
        var e = await context.Players.SingleOrDefaultAsync(
            p => p.Id == id);
        if (e == null)
            return null;
        return EntityToDto(e);
    }

    public async Task<PlayerDetailDTO> Add(PlayerDetailDTO dto)
    {
        var entity = new Player();
        DtoToEntity(dto, entity);
        context.Players.Add(entity);
        await context.SaveChangesAsync();
        return EntityToDto(entity);
    }

    public async Task<PlayerDetailDTO> Update(PlayerDetailDTO dto)
    {
        var entity = await context.Players.FindAsync(dto.Id);
        if (entity == null)
            throw new ArgumentException($"Error updating player {dto.Id}");
        DtoToEntity(dto, entity);
        context.Entry(entity).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return EntityToDto(entity);
    }

    public async Task Delete(int id)
    {
        var entity = await context.Players.FindAsync(id);
        if (entity == null)
            throw new ArgumentException($"Error deleting player {id}");
        context.Players.Remove(entity);
        await context.SaveChangesAsync();
    }
}