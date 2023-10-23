using Microsoft.EntityFrameworkCore;
public static class SeedData
{
  public static void Seed(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<Player>().HasData(new List<Player> {
      new Player{
        Id = 1,
        RealName = "Brianna Forbes",
        PlayerName = "Dreamlurk The Unstoppable",
        Asset = "Foghammer Lead"
      },
      new Player{
        Id = 2,
        RealName = "Darcy Candice Ball",
        PlayerName = "Crystaldash",
        Asset = "Secret Glowquake Gold"
      },
      new Player{
        Id = 3,
        RealName = "Elva Becky Hammond",
        PlayerName = "Seekvenom The Mystic",
        Asset = "Valkyries' Opal Adamant"
      },
      new Player{
        Id = 4,
        RealName = "Enid Rose",
        PlayerName = "Coincurse The Ghoul",
        Asset = "Jewelevil Bronze Of Goddesses"
      },
      new Player{
        Id = 5,
        RealName = "Esmeralda Carrillo",
        PlayerName = "Skulldart",
        Asset = "Yellow Orichalcum Of Paladins"
      },
      new Player{
        Id = 6,
        RealName = "Hillary Gibbs",
        PlayerName = "Speedsoul",
        Asset = "Shifting Rainshadow Iron"
      }
    });
  
  }
}