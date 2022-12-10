nebulaopened = 0

function openNebula() {
  if (nebulaopened == 0) {
  open("https://3000-breadedbrea-breadmathhe-masiztl7npg.ws-us78.gitpod.io/", "", 100, 100);
  nebulaopened = 1
  }
}


const newLocal = "Mochascript";
var cb1 = 0
var cb2 = 0
var cb3 = 0
setInterval(function() {
  var passwordinput = document.getElementById("popo").value;
  cb1 = document.getElementById("checkb1");
  cb2 = document.getElementById("checkb2");
  cb3 = document.getElementById("checkb3");
  console.log(cb1+cb2+cb3)
  if (cb1 == true && cb2 == true && cb3 == true){
  if (passwordinput == newLocal) {
    openNebula();
    }
  }
  }
, 100)


//javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js'; document.body.appendChild(a);}())

// proxy down


