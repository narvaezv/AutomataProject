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
                var text = reader.result;
                var lines = text.split("\n");//Split lines
                var results = "<ul>";
                for (var int = 0; int < lines.length; int++) { //Check each word
                    var thisLine = lines[int];
                    var check = 0;
                    //results += "<li>" + thisLine + "</li>";
                    var words = thisLine.split(" ");//Split words
                    for (var jint = 0; jint < words.length; jint++) {
                        stringAutomata(words[jint], search);
                    }
                    if (check > 0) {
                        results += "<li>"+lines[int]+"</li>";
                    }
                }
                results += "</ul>";
                fileDisplayArea.innerHTML = results;
            }
            reader.readAsText(file);    
        } else {
            alert("File not supported");
            fileDisplayArea.innerText = "File not supported!"
        }
    });
}

function stringAutomata(string, search) {
    alert(string + " " + search);
    if (string.toLowerCase() == search.toLowerCase) {
        alert(string + "es igual a" + search);
        return 1;
    } else {
        return 0;
    }
}