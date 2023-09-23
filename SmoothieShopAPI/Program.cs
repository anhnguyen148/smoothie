using Microsoft.EntityFrameworkCore;
using SmoothieShopAPI.Models;
using SmoothieShopAPI.Services;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

// set up CORS
builder.Services.AddCors(options => {
    options.AddPolicy("CustomPolicy", x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

// set up database connection
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<SmoothieContext>(options => options.UseMySql(connectionString, Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.6.12-mariadb")));

// set up security stuffs.
var securityStuffs = builder.Configuration.GetSection("SecurityStuffs");
var secretKey = securityStuffs.GetSection("SecretKey").Get<String>();
System.Environment.SetEnvironmentVariable("SECRET_KEY", secretKey);

Console.WriteLine(secretKey);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
