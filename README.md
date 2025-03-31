BlazorQuillEditor
A reusable Quill.js rich-text editor component for Blazor Server and WebAssembly applications, with optional secure image upload support.

✨ Features
Rich text editing with full Quill toolbar
Image upload support with automatic server-side handling
Secure uploads with optional role-based policy enforcement
Easy integration and configuration
🚀 Getting Started
Install the NuGet Package

dotnet add package BlazorQuillEditor

Register the Upload Endpoint (in Program.cs)

using BiffLabs.Packages.BlazorQuillEditor.Configuration; using BiffLabs.Packages.BlazorQuillEditor.Endpoints;

builder.Services.Configure<QuillEditorOptions>(options ⇒ { options.UploadRoute = "/upload-image"; // Optional override options.AuthorizationPolicy = "AdminOnly"; // Optional, default: any authenticated user });

app.UseAuthentication(); app.UseAuthorization();

app.MapQuillImageUploadEndpoint();

Use the Component in a Razor Page

<QuillEditor @ref="editorRef" Content="@Content" ContentChanged="@OnContentChanged" ToolbarOptions="@FullToolbar" EnableImageUpload="true" ImageUploadUrl="/upload-image" />

Add the JS Interop

In your _Host.cshtml (Blazor Server) or index.html (Blazor WASM):

<script src="_content/BlazorQuillEditor/quill-blazor.js"></script>
🛡️ Security
The upload endpoint is protected by ASP.NET Core's RequireAuthorization():

Defaults to authenticated users only
Optional policy enforcement (e.g., "AdminOnly")
You must call UseAuthentication() and UseAuthorization() in your app
📂 Saved Files
Uploaded images are saved to:
wwwroot/uploads/

Returned as public URLs:
/uploads/{filename}

📄 Example Policy (Optional)
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AdminOnly", policy =>
        policy.RequireRole("Admin"));
});
📦 Configuration via DI (QuillEditorOptions)
Property	Description	Default
UploadRoute	The URL route for image uploads	/uploads
AuthorizationPolicy	Policy name (or null for authenticated)	null
📜 License
MIT © Phil Larner (https://github.com/Billybiff)
