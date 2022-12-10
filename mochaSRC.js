nebulaopened = 0

function openNebula() {
  if (nebulaopened == 0) {
  open("https://3000-breadedbrea-breadmathhe-masiztl7npg.ws-us78.gitpod.io/", "", 100, 100);
  nebulaopened = 1
  }
}


setInterval(function() {
  var passwordinput = document.getElementById("pass").value;
  if (passwordinput == "Mochascript") {
    openNebula();
    }
  }
, 1)
