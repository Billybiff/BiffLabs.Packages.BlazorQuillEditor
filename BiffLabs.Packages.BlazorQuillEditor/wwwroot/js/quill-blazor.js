export function createQuillEditor(editorId, content, dotNetRef, toolbarOptions) {
    const container = document.getElementById(editorId);
    const options = {
        theme: 'snow',
        modules: {
            toolbar: toolbarOptions || [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'header': [1, 2, 3, false] }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['link', 'image', 'video'],
                ['clean']
            ]
        }
    };

    const quill = new Quill(container, options);
    quill.root.innerHTML = content;

    quill.on('text-change', function () {
        const html = quill.root.innerHTML;
        dotNetRef.invokeMethodAsync('OnContentChanged', html);
    });

    return {
        getHtml: () => quill.root.innerHTML,
        setHtml: (html) => quill.root.innerHTML = html,
        insertImage: (url) => {
            const range = quill.getSelection();
            quill.insertEmbed(range.index, 'image', url);
        },
        quill: quill
    };
}

export function registerQuillImageHandler(editor, uploadUrl) {
    const quill = editor.quill;
    const toolbar = quill.getModule('toolbar');

    toolbar.addHandler('image', () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            if (!file) return;

            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await fetch(uploadUrl, {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) throw new Error('Upload failed');
                const result = await response.json();

                const range = quill.getSelection();
                quill.insertEmbed(range.index, 'image', result.url);
            } catch (err) {
                console.error('Image upload failed:', err);
                alert('Failed to upload image.');
            }
        };
    });
}
