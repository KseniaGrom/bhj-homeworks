const editor = document.getElementById('editor');

editor.value = localStorage.getItem('editorText') || '';

editor.oninput = () => localStorage.setItem('editorText', editor.value);