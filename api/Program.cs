var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddDbContext<PlayerContext>(p => p.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));
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
    repo.GetAllPlayers());

app.Run();
