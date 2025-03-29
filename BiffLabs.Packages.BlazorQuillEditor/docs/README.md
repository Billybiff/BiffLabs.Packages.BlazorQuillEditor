
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
    private string _content = string.Empty;
    private QuillEditor? editorRef;

    private string[][] FullToolbar => new[]
    {
        new[] { "bold", "italic", "underline", "strike" },
        new[] { "blockquote", "code-block" },
        new[] { "header", "1", "2", "3", "4" },
        new[] { "list", "ordered", "bullet" },
        new[] { "script", "sub", "super" },
        new[] { "indent", "-1", "+1" },
        new[] { "direction", "rtl" },
        new[] { "size", "small", "medium", "large", "huge" },
        new[] { "color" },
        new[] { "background" },
        new[] { "font" },
        new[] { "align" },
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
