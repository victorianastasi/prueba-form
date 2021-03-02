<?php
$nombre = $_POST['nombre'];
$msj = $_POST['msj'];
$mail = $_POST['email'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje enviado: " . $msj . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'vicrnastasi@gmail.com';
$asunto = 'Consulta de mi sitio web';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html");
?>