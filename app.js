//Seleccion de elemtos//
const botonEncriptar = document.querySelector(".boton1");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".resultado");
const contenido = document.querySelector(".targeta-contenido");
const copiar = document.querySelector(".copiar");
const botonDesencriptar = document.querySelector(".boton2");

//  encriptar  //

botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    // let txt = texto.normalize("NFC").replace(/[^\w\sñÑ]/g,"");
    let txt = texto.normalize("NFC").replace(/[^\p{L}\p{N}\s]/gu,"");

    if(texto == ""){
        aviso.style.color = "#ff0000";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2500)
    }
    else if(texto !== txt){
        aviso.style.color = "#ff0000";
        aviso.style.fontWeight = "900";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1800)
    }

    else{
        texto = texto.toLowerCase();
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
    
    respuesta.innerHTML = texto;
    copiar.style.visibility = "inherit";
    contenido.remove();}
})

//  desencriptar  //

botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
    
    respuesta.innerHTML = texto;
    
    copiar.style.visibility = "inherit";
    contenido.remove();
})

copiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
})