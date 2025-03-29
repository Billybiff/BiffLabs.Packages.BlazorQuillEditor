window.quillEditor = {
    editors: {},

    createEditor: function (elementId, toolbarOptions) {
        const options = {
            theme: 'snow',
            modules: { toolbar: toolbarOptions }
        };
        this.editors[elementId] = new Quill('#' + elementId, options);
    },

    getEditorContent: function (elementId) {
        return this.editors[elementId].root.innerHTML;
    },

    setEditorContent: function (elementId, content) {
        this.editors[elementId].root.innerHTML = content;
    }
};
