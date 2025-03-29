
## BlazorQuillEditor

A reusable, fully featured Quill.js rich-text editor component for Blazor applications, supporting configurable toolbar options and viewer functionality.

---

## Features

-**Rich-Text Editing** using Quill.js
-**Customizable Toolbars**
-**Viewer Mode** for read-only rendering
-Easy to integrate and use with Blazor (Server & WebAssembly)

---

## Installation

Install via NuGet package manager:

```shell
dotnet add package BlazorQuillEditor

Usage Instructions
Step 1: Include required CSS and JS
	In your Blazor Server (_Host.cshtml) or Blazor WebAssembly (index.html):

Add to <head>:
	<link href="_content/BlazorQuillEditor/css/quill.snow.css" rel="stylesheet" />

Add to <body> (below blazor.web.js):
	<script src="_content/BlazorQuillEditor/js/quill.js"></script>
	<script src="_content/BlazorQuillEditor/js/quillInterop.js"></script>

Step 2: Add an Editor to a Razor Page
To add a basic editor:

@using BlazorQuillEditor

<QuillEditor @ref="editorRef" Content="@_content" />

@code {
    private string _content = string.Empty;
    private QuillEditor? editorRef;
}

Step 3: Configuring a Custom Toolbar (Full Example)
You can customise your editor toolbar easily:

@using BlazorQuillEditor

<QuillEditor @ref="editorRef" Content="@_content" ToolbarOptions="@FullToolbar" />

@code {
    private string _content = "";
    private QuillEditor? editorRef;

    private object[] FullToolbar => new object[]
    {
        new[] { "bold", "italic", "underline", "strike" },
        new[] { "blockquote", "code-block" },
        new object[] { new { header = new object[] { 1, 2, 3, 4, false } } },
        new object[] { new { list = "ordered" }, new { list = "bullet" } },
        new object[] { new { script = "sub" }, new { script = "super" } },
        new object[] { new { indent = "-1" }, new { indent = "+1" } },
        new object[] { new { direction = "rtl" } },
        new object[] { new { size = new[] { "small", false, "large", "huge" } } },
        new object[] { new { color = new string[] { } }, new { background = new string[] { } } },
        new object[] { new { font = new string[] { } } },
        new object[] { new { align = new string[] { } } },
        new[] { "link", "image", "video" },
        new[] { "clean" }
    };
}


Step 4: Add a Viewer for Read-only Content
To render HTML content created by Quill editor, use:

@using BlazorQuillEditor.Components

<QuillViewer Content="@_content" />

@code {
    private string _content = "<p>This is <strong>Quill</strong> content</p>";
}


## License
This project is licensed under the MIT License.

It incorporates Quill.js, licensed under the BSD 3-Clause License.

## Maintainers
	Phil Larner
	Biff Labs

## Contributing
	Contributions, bug reports, and suggestions are welcome through GitHub Issues and Pull Requests.

## Acknowledgements
	Quill.js
	Blazor
