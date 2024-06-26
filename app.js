
let intentoss = 0;
let maximosIntentoss = 0;
let listaNumero = [];
let numeroGenerado = 0;
let capNumero = 100;

function asignarTextoElemento (elemento, texto ){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;   
    return;
}

function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario == numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el numero secreto');
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        intentoss++;
        maximosIntentoss--;
        if (maximosIntentoss <= 0){
        asignarTextoElemento("p", 'Has agotado tus intentos')
        } else{
        if (numeroUsuario < numeroSecreto) {
            asignarTextoElemento("p", `el numero es mayor, intentos restantes ${maximosIntentoss}`);
        
        }else {
            asignarTextoElemento("p", `el numero es menor, intentos restantes ${maximosIntentoss}`)
        }
    }  
    limpiarKaja();
    return;
  

    }      

}

function limpiarKaja () {
    let valorKaja = document.querySelector('#valorUsuario').value = "";

}

function generarNumeroAleatorio() {

    let numeroGenerado = Math.floor(Math.random()* capNumero) + 1; 
    console.log(numeroGenerado)
    console.log(listaNumero)
    if (listaNumero.length == capNumero){
        reiniciarJuego(); 
    } else {
        if (listaNumero.includes(numeroGenerado)){
        return generarNumeroAleatorio();
        }else{
            listaNumero.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}        
    

function secuenciaIniciales(){
    asignarTextoElemento("h1", "Adivina el numero secreto");
    asignarTextoElemento('p', 'Indica un numero entre 1 y 100'); 
    numeroSecreto = generarNumeroAleatorio();
    intentoss = 0;
    maximosIntentoss = 10;
}
function reiniciarJuego() {
    //limpiarcaja
    limpiarKaja();
    //indicar mensajes
    secuenciaIniciales();
    //generar numero
  
    // mostrat intentos
    
    //deshabilitarbotonnuevojuego
    document.querySelector('#reiniciar').setAttribute("disabled", 'true');
   
}     
    
secuenciaIniciales();

console.log(numeroSecreto);