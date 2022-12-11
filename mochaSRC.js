function openNebula() {
  open("https://3000-paternaloil-neberlu-qtkojnvg9qx.ws-us78.gitpod.io/", "", 100, 100);
}


const newLocal = "Mochascript";
var passwordinput = document.getElementById("popo").value;
const cb1 = document.querySelector('#checkb1');
const cb2 = document.querySelector('#checkb3');
const cb3 = document.querySelector('#checkb4');
const btn = document.querySelector('#button');

btn.onclick = () => {
    if(cb1.checked == true){
      if(cb2.checked == true){
        if(cb3.checked == true){
        passwordinput = document.getElementById("popo").value;
          if(passwordinput==newLocal){
            openNebula();
          }
        }
        }
    }
}