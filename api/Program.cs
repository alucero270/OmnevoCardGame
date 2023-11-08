using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

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
// if (app.Environment.IsDevelopment())
// {
// }
    app.UseSwagger();
    app.UseSwaggerUI();

app.UseCors(p => p.WithOrigins("http://localhost:3000")
    .AllowAnyHeader()
    .AllowAnyMethod());

app.UseHttpsRedirection();

app.MapGet("/players", (IPlayerRepository playerRepo, string sortOrder) =>
    playerRepo.GetAllPlayers(sortOrder))
        .Produces<PlayerDTO[]>(StatusCodes.Status200OK);


app.MapGet("/players/{playerId:int}", async (int playerId, IPlayerRepository playerRepo) =>
{
    var player = await playerRepo.GetDetails(playerId);
    if (player == null)
        return Results.Problem($"Player with ID {playerId} not found.", statusCode: 404);
    return Results.Ok(player);
}).ProducesProblem(404).Produces<PlayerDetailDTO>(StatusCodes.Status200OK);

app.MapPost("/players/{playerId:int}", async ([FromBody] PlayerDetailDTO dto, IPlayerRepository playerRepo) =>
{
    var newPlayer = await playerRepo.Add(dto);
    return Results.Created($"/player/{newPlayer.Id}", newPlayer);
}).Produces<PlayerDetailDTO>(StatusCodes.Status201Created);

app.MapPut("/players", async ([FromBody] PlayerDetailDTO dto, IPlayerRepository playerRepo) =>
{
    if (await playerRepo.GetDetails(dto.Id) == null)
        return Results.Problem($"Player {dto.Id} not found",
            statusCode: 404);
    var updatedPlayer = await playerRepo.Update(dto);
    return Results.Ok(updatedPlayer);
}).ProducesProblem(404).Produces<PlayerDetailDTO>(StatusCodes.Status200OK);

app.MapDelete("/players/{playerId:int}", async (int playerId,
    IPlayerRepository playerRepo) =>
{
    if (await playerRepo.GetDetails(playerId) == null)
        return Results.Problem($"Player {playerId} not found",
            statusCode: 404);
    await playerRepo.Delete(playerId);
    return Results.Ok();
}).ProducesProblem(404).Produces(StatusCodes.Status200OK);

app.Run();

