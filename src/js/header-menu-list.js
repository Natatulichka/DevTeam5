
function headerMenuFunction() {
  var x = document.getElementById("");
  if (x.className.indexOf("") == -1) { 
    x.className += "";
  } else {
    x.className = x.className.replace("", "");
  }
}
