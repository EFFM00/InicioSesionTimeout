// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};


//Ejecutamos todo el código después que se ejecute el evento load dentro de window.
window.addEventListener("load", () => {
  //Se tiene que traer el form para submit. En este caso no hace falta porque no enviamos información a un servidor
  let form = document.querySelector("form");
  let h1 = document.querySelector("h1");
  let divLoader = document.getElementById("loader");
  let contendorBienvenida = document.querySelector("main");

  //Traemos el email por medio de su id
  let email = document.getElementById("email-input");

  //Traemos el password por medio de su id
  let password = document.getElementById("password-input");  

  //El array de objetos lo traemos directamente para no llamarlo dentro de otro objeto
  let usuariosDB = baseDeDatos.usuarios;

  //Traemos el contenedor del email y password para insertar luego el mensaje de error
  let errorContainer = document.getElementById("error-container");

  //Si fuera el submit directamente se trae el form y se añade el evento click
  let botonSubmit = document.querySelector("button");
    
  let span = document.createElement("span");
  
  //Acá verificamos si los datos están bien
  function compararDatos(){
    
    //El mail que ingrese el usuario
    let usrEmail = email.value;
    
    //La pass que ingresó el usuario
    let usrPass = password.value;
    
    //esto lo usaremos luego para validar el inicio
    let resultado = false;
    
    //Luego insertaremos el mail y password del array de datos
    let emailValido = "";
    let passValida = "";
    
    divLoader.classList.remove("hidden");
    errorContainer.classList.add("hidden");
    
    usuariosDB.forEach(datosUsr => {
      
      //Si el mail ingresado por el usuario corresponde con uno de la base de datos se guarda en la variable emailValido
      if(usrEmail == datosUsr.email){
        emailValido = datosUsr.email;
        
        //Si la contraseña ingresada por el usuario corresponde con uno de la base de datos se guarda en passValida. Tanto para el mail como para la pass es para sacarlo del ciclo
        if(usrPass == datosUsr.password && usrPass.length > 5) {
          passValida = datosUsr.password;
        } 
      }
    })
    
    //Luego se comparan la variable sacada del forEach (en vez de la base de datos directamente) y los datos ingresados por el usuario, y se modifica "resultado"
    if (usrEmail == emailValido && usrPass == passValida) {
      resultado = "true";

    } else {
      
      resultado = false;
      
    }

    //El resultado de la función se puede utilizar luego
    console.log(resultado);
    return resultado;
  }

  function mostrarError() {
    divLoader.classList.add("hidden");
    let text = "Alguno de los datos ingresados son incorrectos";  
    span.innerText = text;
    errorContainer.classList.remove("hidden");
    errorContainer.appendChild(span);
  }


  function mensjBievenida() {
    h1.style.display = "none";
    form.style.display = "none";
  
    let mensajeBienvenida = document.createElement("h1");
    mensajeBienvenida.innerText = "Bienvenido!!";
    contendorBienvenida.appendChild(mensajeBienvenida);

  }

  function iniciarSesion(){
    if(compararDatos()){
      mensjBievenida();
    } else {
      mostrarError();
    }
  }


  botonSubmit.addEventListener("click", () => {
    compararDatos();
    
    setTimeout(()=> {
      iniciarSesion()
    }, 3000)
  });

})
  




// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
