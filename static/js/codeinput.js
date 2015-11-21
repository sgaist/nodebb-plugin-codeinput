$('document').ready(function() {
    require(['composer', 'composer/controls'], function(composer, controls) {
        composer.addButton('fa fa-code', function(textarea, selectionStart, selectionEnd) {
            if(selectionStart === selectionEnd){
                controls.insertIntoTextarea(textarea, "```\n//your code here\n```");
                controls.updateTextareaSelection(textarea, selectionStart + 4, selectionStart + 20);
            } else {
                controls.wrapSelectionInTextareaWith(textarea, '```\n', '\n```');
                controls.updateTextareaSelection(textarea, selectionStart + 4, selectionEnd + 4);
            }
        });
    });
});