// JavaScript source code
window.onload = function () {
    var fileInput = document.getElementById('file');
    var fileDisplayArea = document.getElementById('demo');

    fileInput.addEventListener('change', function (e) {
        var file = fileInput.files[0];
        var textType = /text.*/;
        if (file.type.match(textType)) {
            var reader = new FileReader();
            reader.onload = function (event) {
                //Read lines
                var text = reader.result;
                fileDisplayArea.innerText = text;

                /*for (var line = 0; line < lines.length; line++) {
                    results += line[line] + "\n";
                }
                fileDisplayArea.innerText = results;*/
            }
            reader.readAsText(file);    
        } else {
            alert("File not supported");
            fileDisplayArea.innerText = "File not supported!"
        }
    });
}