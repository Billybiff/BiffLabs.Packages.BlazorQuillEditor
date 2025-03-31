using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using BiffLabs.Packages.BlazorQuillEditor.Configuration;

namespace BiffLabs.Packages.BlazorQuillEditor.Endpoints;

/// <summary>
/// Provides an extension method to register a Quill image upload endpoint within the ASP.NET Core routing system.
/// </summary>
public static class QuillUploadEndpointExtensions
{
    /// <summary>
    /// Maps an authenticated HTTP POST endpoint for uploading images used in the Quill editor.
    /// The route path and authorisation policy can be configured via <see cref="QuillEditorOptions"/>.
    /// </summary>
    /// <param name="app">The <see cref="IEndpointRouteBuilder"/> to add the endpoint to.</param>
    /// <returns>The same <see cref="IEndpointRouteBuilder"/> instance for chaining.</returns>
    public static IEndpointRouteBuilder MapQuillImageUploadEndpoint(this IEndpointRouteBuilder app)
    {
        var options = app.ServiceProvider.GetRequiredService<IOptions<QuillEditorOptions>>().Value;

        var endpoint = app.MapPost(options.UploadRoute, async (HttpRequest request, IWebHostEnvironment env) =>
        {
            var file = request.Form.Files["image"];
            if (file == null || file.Length == 0)
                return Results.BadRequest("No image uploaded");

            var uploadsPath = Path.Combine(env.WebRootPath, "uploads");
            Directory.CreateDirectory(uploadsPath);

            var fileName = Path.GetRandomFileName() + Path.GetExtension(file.FileName);
            var filePath = Path.Combine(uploadsPath, fileName);

            await using var stream = File.Create(filePath);
            await file.CopyToAsync(stream);

            var imageUrl = $"/uploads/{fileName}";
            return Results.Ok(new { url = imageUrl });
        });

        if (!string.IsNullOrWhiteSpace(options.AuthorizationPolicy))
        {
            endpoint.RequireAuthorization(options.AuthorizationPolicy);
        }
        else
        {
            endpoint.RequireAuthorization();
        }

        return app;
    }
}
