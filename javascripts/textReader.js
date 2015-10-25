// JavaScript source code
window.onload = function () {
    var fileInput = document.getElementById('file');
    var fileDisplayArea = document.getElementById('demo');

    fileInput.addEventListener('change', function (e) {
        var file = fileInput.files[0];
        var textType = /text.*/;
        if (file.type.match(textType)) {
            var reader = new FileReader();
            reader.onload = function (e) {
                fileDisplayArea.innerText = reader.result + "Huawei";
            }
            reader.readAsText(file);
        } else {
            fileDisplayArea.innerText = "File not supported!"
        }
    });
}