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
                    var words = text.split(" ");//Split words
                    for (var jint = 0; jint < words.length; jint++) {
                        var check = stringAutomata(words[int], search);
                    }
                    if (check) {
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
    if(string.toLowerCase() == search.toLowerCase()){
        alert("There is an equal word");
        return true;
    } else {
        alert("There is no equal word");
        return false;
    }
}