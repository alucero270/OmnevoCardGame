var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

builder.Services.AddDbContext<PlayerContext>(options => options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));
builder.Services.AddScoped<IPlayerRepository, PlayerRepository>();
 
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(p => p.WithOrigins("http://localhost:3000")
    .AllowAnyHeader()
    .AllowAnyMethod());

app.UseHttpsRedirection();

app.MapGet("/players", (IPlayerRepository repo) => 
    repo.GetAllPlayers())
        .Produces<PlayerDTO[]>(StatusCodes.Status200OK);

app.MapGet("/players/{playerId:int}", async (int playerId, IPlayerRepository repo) => {
    var player = await repo.GetDetails(playerId);
    if (player == null)
        return Results.Problem($"Player with ID {playerId} not found.",statusCode:404);
    return Results.Ok(player);
}).ProducesProblem(404).Produces<PlayerDetailDTO>(StatusCodes.Status200OK);

app.Run();

