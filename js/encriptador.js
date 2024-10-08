//----elementos---//
const botonEncriptar = document.querySelector(".boton_encriptar");
const textoEncriptar = document.querySelector(".text_area");
const aviso = document.querySelector(".contenedor_aviso");
const respuesta = document.querySelector(".mensaje");
const contenido = document.querySelector(".tarjeta_contenedor");
const botonCopiar = document.querySelector(".boton_copiar");
const botonDesencriptar = document.querySelector(".boton_desencriptar")



//---boton_encriptar----//
botonEncriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");            
        },1500);
    }

    else if(texto !== txt ){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");            
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minuscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");            
        },1500);
    }

    else{
        texto = texto.replace(/e/mg,"enter");
        texto = texto.replace(/i/mg,"imes");
        texto = texto.replace(/a/mg,"ai");     
        texto = texto.replace(/o/mg,"ober");
        texto = texto.replace(/u/mg,"ufat");  
        
        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
    }  
});


//--boton_desencriptar--//
botonDesencriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");            
        },1500);
    }

    else if(texto !== txt ){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");            
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minuscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");            
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg,"e");
        texto = texto.replace(/imes/mg,"i");
        texto = texto.replace(/ai/mg,"a");     
        texto = texto.replace(/ober/mg,"o");
        texto = texto.replace(/ufat/mg,"u");  
        
        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
    }  
});


//---boton_copiar--//
botonCopiar.addEventListener("click",e=>{
    e.preventDefault();
    let copiar =  respuesta;
    copiar.select();
    document.execCommand("copy");

});