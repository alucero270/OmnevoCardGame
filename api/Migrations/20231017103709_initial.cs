using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Players",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RealName = table.Column<string>(type: "TEXT", nullable: false),
                    PlayerName = table.Column<string>(type: "TEXT", nullable: false),
                    Asset = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Players", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Players",
                columns: new[] { "Id", "Asset", "PlayerName", "RealName" },
                values: new object[] { 1, "Foghammer Lead", "Dreamlurk The Unstoppable", "Brianna Forbes" });

            migrationBuilder.InsertData(
                table: "Players",
                columns: new[] { "Id", "Asset", "PlayerName", "RealName" },
                values: new object[] { 2, "Secret Glowquake Gold", "Crystaldash", "Darcy Candice Ball" });

            migrationBuilder.InsertData(
                table: "Players",
                columns: new[] { "Id", "Asset", "PlayerName", "RealName" },
                values: new object[] { 3, "Valkyries' Opal Adamant", "Seekvenom The Mystic", "Elva Becky Hammond" });

            migrationBuilder.InsertData(
                table: "Players",
                columns: new[] { "Id", "Asset", "PlayerName", "RealName" },
                values: new object[] { 4, "Jewelevil Bronze Of Goddesses", "Coincurse The Ghoul", "Enid Rose" });

            migrationBuilder.InsertData(
                table: "Players",
                columns: new[] { "Id", "Asset", "PlayerName", "RealName" },
                values: new object[] { 5, "Yellow Orichalcum Of Paladins", "Skulldart", "Esmeralda Carrillo" });

            migrationBuilder.InsertData(
                table: "Players",
                columns: new[] { "Id", "Asset", "PlayerName", "RealName" },
                values: new object[] { 6, "Shifting Rainshadow Iron", "Speedsoul", "Hillary Gibbs" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Players");
        }
    }
}
