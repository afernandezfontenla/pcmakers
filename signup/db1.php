<?php
//Añadimos las variables con la información referente al servidor.
$servername = "127.0.0.1";
$usuario = "root";
$password = "";

//Hacemos nuestro procedimiento dentro de un try-catch porque generar un objeto PDO puede devolver una excepción.
try {

    //Realizamos la conexión a la base de datos utilizando las variables antes mencionadas.
    $conn = "mysql:dbname=perfiles;host=127.0.0.1";
    $bd = new PDO($conn, $usuario, $password);

    //Introducimos los valores de los $_POST[] en variables para utilizarlas a continuación
    $firstname = $_POST["nombre"];
    $lastname = $_POST["apellido"];
    $email = $_POST["email"];
    $password = $_POST["clave"];

    //Preparamos la sentencia para la inserción de los datos en la base de datos.
    $stmt = $bd->prepare("INSERT INTO perfiles_guardados (nom_user, ape_user, email, clave) VALUES (?, ?, ?, ?)");
    $stmt->execute(array($firstname, $lastname, $email, $password));

} catch (PDOException $e) {
    //Mensaje de excepción
    echo "Error: " . $e->getMessage();
}

$conn = null;