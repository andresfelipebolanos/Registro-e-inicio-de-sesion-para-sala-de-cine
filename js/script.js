//Para el movimiento entre formularios
const contenedor = document.querySelector(".contenedor");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click",()=>{
   contenedor.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
   contenedor.classList.add("toggle");
});

//REGISTRO:

// declaramos constantes y variables
const formreg = document.getElementById('formreg');
const innombre = document.getElementById('nombre');
const incorreo = document.getElementById('correo');
const intelefono = document.getElementById('telefono');
const incumples = document.getElementById('cumples');
const incontraseña = document.getElementById('contraseña');
const incontraseña2 = document.getElementById('contraseña2');
const arrayDisplay = document.getElementById('arrayDisplay');
//creamos el array
let cuentas = JSON.parse(localStorage.getItem('cuentas')) || [];
//escuchamos el evento del boton para ejecutar la validacion y registro de datos
formreg.addEventListener('submit', function(event){
   event.preventDefault();
   const nombre = innombre.value;
   const correo = incorreo.value;
   const tel = intelefono.value;
   const cumple = incumples.value;
   const contraseña = incontraseña.value;
   const contraseña2 = incontraseña2.value;
   
   //creamos funcion para saber si el usuario ya esta registrado
   const registrado = cuentas.find(cuenta => cuenta.correo === correo);
   if(registrado){
      return alert('El usuario ya existe');
   }
   
   // creamos funcion para guardar los datos del array en el local storage
   function guardarlocal(){
      localStorage.setItem('cuentas', JSON.stringify(cuentas));
      }
   // validamos los datos, los metemos y guardamos en el array en el local storage 
   if(nombre&&correo&&tel&&cumple&&contraseña&&contraseña2){   
      if (contraseña==contraseña2){
         const nuevaCuenta = {nombre:nombre,correo:correo,telefono:tel,cumpleaños: cumple,contraseña:contraseña};
         cuentas.push(nuevaCuenta);
         guardarlocal();
         innombre.value ='';
         incorreo.value ='';
         intelefono.value ='';
         incumples.value ='';
         incontraseña.value ='';
         incontraseña2.value = '';
         alert('Registro Exitoso');
         
      }
      else{
         alert('La contraseña no coincide');
      }
   }
   else{
      alert('Por favor ingrese todos los datos');
   }
})

//INICIO DE SESION

// declaramos constantes y variables
const formini =  document.getElementById('inicio');
const contrain = document.getElementById('contraseñain');
const correoin = document.getElementById('correoin');

formini.addEventListener('submit', function(event){
   event.preventDefault();
   const contra = contrain.value;
   const correo = correoin.value;

   const validar = cuentas.find(cuenta=> cuenta.correo === correo && cuenta.contraseña === contra);
   if(!validar){
      return alert('Usuario y/o contraseña incorrecta');
   }
   alert('Bienvenido'+' '+ validar.nombre);
   window.location.href = 'home.html';
})