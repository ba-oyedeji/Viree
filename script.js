function myFunction() {
    var x = document.getElementById("password-field");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  var input = document.getElementById("password-field");
  var text = document.getElementById("caplock");
input.addEventListener("keyup", function(event) {

if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
});