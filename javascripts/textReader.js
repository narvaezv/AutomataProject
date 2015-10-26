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
                var search = document.getElementById('search').value;
                //Read lines
                var text = reader.result;
                var lines = text.split("\n"); //Split lines
                var words = text.split(" "); //Split words
                var results = "<ul>";
                for (var int = 0; int < words.length; int++) {
                    stringAutomata(words[int]);
                }
                results += search + " asdasd </ul>";
                fileDisplayArea.innerHTML = results;
            }
            reader.readAsText(file);    
        } else {
            alert("File not supported");
            fileDisplayArea.innerText = "File not supported!"
        }
    });
}

function stringAutomata(string) {

}