window.quillEditor = {
    editors: {},

    createEditor: function (elementId) {
        const options = {
            theme: 'snow'
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
