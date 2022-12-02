const homer = document.getElementById('homer');
const inputUsuario = document.getElementById('input-usuario');
const inputClave = document.getElementById('input-clave');
const body = document.querySelector('body');
const anchoMitad = window.innerWidth/2;
const altoMitad = window.innerHeight/2; 
let seguirPunteroMouse = true;


body.addEventListener('mousemove', (m) => {
  if (seguirPunteroMouse) {    
    if (m.clientX < anchoMitad && m.clientY < altoMitad){
        homer.src = "img/homer2.png";
    } else if(m.clientX < anchoMitad && m.clientY > altoMitad){
        homer.src = "img/homer5.png";

    } else if(m.clientX > anchoMitad && m.clientY < altoMitad){
        homer.src = "img/homer3.png";
    } else {
        homer.src = "img/homer4.png";
    }
   } 

})

inputUsuario.addEventListener('focus',()=>{
    seguirPunteroMouse = false;

})

inputUsuario.addEventListener('blur',()=>{
    seguirPunteroMouse = true;

})

inputClave.addEventListener('focus',()=>{
    seguirPunteroMouse = true;

})





