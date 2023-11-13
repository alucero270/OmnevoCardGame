 

public class PlayerContext : DbContext
{
  public PlayerContext(DbContextOptions<PlayerContext> options) : base(options) { }

  public DbSet<Player> Players => Set<Player>();



  protected override void OnConfiguring(DbContextOptionsBuilder options)
  {
    var folder = Environment.SpecialFolder.LocalApplicationData;
    var path = Environment.GetFolderPath(folder);
    options.UseSqlite($"Data Source={Path.Join(path, "Players.db")}");
  }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        SeedData.Seed(modelBuilder);
    }
}