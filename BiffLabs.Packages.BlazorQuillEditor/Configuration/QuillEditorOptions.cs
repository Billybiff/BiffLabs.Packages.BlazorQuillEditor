using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


    namespace BiffLabs.Packages.BlazorQuillEditor.Configuration;

    /// <summary>
    /// Options for configuring the Quill image upload endpoint.
    /// </summary>
    public class QuillEditorOptions
    {
        /// <summary>
        /// The route on which the image upload endpoint is exposed (e.g. "/uploads").
        /// </summary>
        public string UploadRoute { get; set; } = "/uploads";

        /// <summary>
        /// Optional: the name of the authorization policy to apply to the upload endpoint.
        /// </summary>
        public string? AuthorizationPolicy { get; set; }
    }
