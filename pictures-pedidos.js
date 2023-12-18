 // Pictures selector

 
 let redBtn = document.getElementById("vanilla");
 let blueBtn = document.getElementById("chocolate");
 let blackBtn = document.getElementById("darkChoco");
 let frutas = document.getElementById("frutas")
 let imgchange = document.getElementById("imgchange");
 let pasas = document.getElementById("pasas");
let zanahoria = document.getElementById("zanahoria")
 
 redBtn.onclick = function() {
 
     imgchange.src = "./img-appointment/pastel-simple-desnudo.jpg";
 }
 
 blueBtn.onclick = function() {
     imgchange.src = "./img-appointment/chocolate.jpg";
 }
 
 blackBtn.onclick = function() {
     imgchange.src = "./img-appointment/pastel-chocolate.jpg";
 }

 frutas.onclick = function() {
 
    imgchange.src = "./img-appointment/tarta-de-frutas_468_1_890x445.jpg";
}


pasas.onclick = function() {
 
    imgchange.src = "./img-appointment/pasas.jpg";
}

zanahoria.onclick = function() {
 
    imgchange.src = "./img-appointment/zanahoria.jpg";
}



// cantidad de libras  

let mediaLibra = document.getElementById("1-2");
let libra = document.getElementById("1");
let cuartoLibra = document.getElementById("1-4")


mediaLibra.onclick = function() {
 
    imgchange.src = "./imagnes-libras/1-2..libra.jpg";
}
libra.onclick = function() {
 
    imgchange.src = "./imagnes-libras/1-libra.jpg";
}

cuartoLibra.onclick = function() {
 
    imgchange.src = "./imagnes-libras/1-4..libra.jpg";
}
 
// mostrar u ocultar formulario 


const mostrarBtn = document.getElementById("mostrarBtn");
    const contenidoOculto = document.getElementById("contenidoMostrar");
const contenidoOcultoDIV = document.getElementById("contenidoOculto")
document.addEventListener("DOMContentLoaded", function () {
   
  
    mostrarBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Evita el envío del formulario
  
      if (contenidoMostrar.style.display === "none" || contenidoOculto.style.display === "" ) {
        contenidoMostrar.style.display = "block"           // Muestra el div
        
      } else{contenidoMostrar.style.display = "none" } // oculta el div
    }); 

  });


  
const mostrarBtn2 = document.getElementById("mostrarBtn2");
const contenidoOculto2 = document.getElementById("contenidoMostrar2");
const contenidoOcultoDIV2 = document.getElementsByClassName("contenidoOculto2")
document.addEventListener("DOMContentLoaded", function () {


mostrarBtn2.addEventListener("click", function (e) {
  e.preventDefault(); // Evita el envío del formulario

  if (contenidoMostrar2.style.display === "none" || contenidoOculto2.style.display === "" ) {
    contenidoMostrar2.style.display = "block"           // Muestra el div
    
  } else{contenidoMostrar2.style.display = "none" } // oculta el div
}); 

});

const mostrarBtn3 = document.getElementById("mostrarBtn3");
const contenidoOculto3 = document.getElementById("contenidoMostrar3");
const contenidoOcultoDIV3 = document.getElementsByClassName("contenidoOculto3")
document.addEventListener("DOMContentLoaded", function () {


mostrarBtn3.addEventListener("click", function (e) {
  e.preventDefault(); // Evita el envío del formulario

  if (contenidoMostrar3.style.display === "none" || contenidoOculto3.style.display === "" ) {
    contenidoMostrar3.style.display = "block"           // Muestra el div
    
  } else{contenidoMostrar3.style.display = "none" } // oculta el div
}); 

});