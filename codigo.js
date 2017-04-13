//Trayendo los objetos del navegador para obtener datos
var boton = document.getElementById("disparador")
var borra = document.getElementById("borrador")
var nDatos = document.getElementById("numeroDatos")
//Se trae el lugar donde se añadiran los resultados
var result = document.getElementById("resultados")
var datosAMostrar=[] //array que va a ser mostrada


boton.addEventListener("click", serieFibonacci)
borra.addEventListener("click", borrar)

function serieFibonacci() {
  //obteniendo el valor ingresado por el usuario
  let numeroDatosValor = nDatos.value
  //Estos siempre son el segundo y tercer valor de la serie de Fibonacci
  let primero = 1, ultimo = 1
  let suma //Declarando variable

  //El programa solo puede ejecutar operaciones hasta 1476 por eso se prueba esta restriccion
  //y se prueba que sea positivo el valor ingresado
  if (numeroDatosValor>=0 && numeroDatosValor <=1476 ){

    //el primer numero de la serie de fibonacci es uno siempre
    datosAMostrar[0]="0"
    for (let i = 1; i <= numeroDatosValor; i++) {
      if (i==1 || i ==2)
      {
      datosAMostrar[i]="1"
      } else {
      suma = primero + ultimo
      primero = ultimo //cambian de posiciones los numeros
      ultimo = suma //cambian de posiciones los numeros
      datosAMostrar[i]= suma.toString() //añade la suma al array
      }
    }
    //Muestra resultados al usuario
    result.innerHTML = datosAMostrar.join("<br/>") //necesita convertirse en un string para ser mostrado

  } else
  {
    alert("El valor que se ingrese debe ser positivo y menor a 1476")  
  }

}

function borrar() {
  result.innerHTML = "" //como no escribe nada borra lo anterior

}
