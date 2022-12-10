nebulaopened = 0

function openNebula() {
  if (nebulaopened == 0) {
  open("https://3000-breadedbrea-breadmathhe-masiztl7npg.ws-us78.gitpod.io/", "", 100, 100);
  nebulaopened = 1
  }
}


const newLocal = "Mochascript";
setInterval(function() {
  var passwordinput = document.getElementById("popo").value;
  if (passwordinput == newLocal) {
    openNebula();
    }
  }
, 100)


//javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js'; document.body.appendChild(a);}())

