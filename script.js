const botao = document.querySelector('.botao')


botao.addEventListener('click',Calculartemperatura)


function Calculartemperatura(){

let c= document.querySelector('.Nome').value
let f= document.querySelector('.Nome').value

f= 1.8 * c + 32 

const resultado = document.querySelector('.resultado')
 

resultado.innerHTML=` Sua temperatura em Fahrenheit é ${f}°`

}