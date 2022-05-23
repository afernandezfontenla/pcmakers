//Código para la animacion del toggle
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

//Función que recoje los datos del html usando DOM y los envia a nuestro fichero php para introducirlos en la base de datos.
function loadDoc() {

   //variables con el valor introducido en los inputs
   var firstname, lastname, email, password;
   firstname = document.getElementById("nombre").value;
   lastname = document.getElementById("apellido").value;
   email = document.getElementById("email").value;
   password = document.getElementById("clave").value;

   //objeto AJAX tipo xhttp para comprobar el estado de la funcion onreadystatechange y si no está lista nos mostrará un error por consola.
   var xhttp = new XMLHttpRequest();

   xhttp.onreadystatechange = function () {
     if (this.readyState == 4 && this.status == 200) {
      console.log("Error")
     }
   };
   //Abrimos nuestro fichero PHP.
   xhttp.open("POST", "db1.php", false);

   //Objeto formData donde introducimos nuestras variables para enviarlas en conjunto.
   let formData = new FormData();
   formData.append("nombre", firstname);
   formData.append("apellido", lastname);
   formData.append("email", email);
   formData.append("clave", password);

   //Enviamos el formData creado anteriormente a nuestro fichero PHP, abierto con .open
   xhttp.send(formData);

   //Si la ejecución del programa ha sido correcta, devolvemos false.
   return false;
}