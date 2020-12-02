var modal = document.getElementById("newsLetterModal");
var btn = document.getElementById("signUpButton");
var span = document.getElementById("close");
var submit = document.getElementById("submit");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

submit.onclick = function() {
    modal.style.display = "none";
}
