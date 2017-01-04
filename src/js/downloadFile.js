// Convert to .txt file
function download() {
  var text = localStorage.getItem("text");
  var filename = 'writer-file.txt';
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});

  saveAs(blob, filename);
}
