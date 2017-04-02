<?php 
// **************Configuración *************** 

//Poner e-mail destinatario acá
$mailto = "info@gedco.com.ar"; 

//El Asunto debe modificarse en el HTML (<input name="asunto" type="hidden" id="asunto" value="Modificar el asunto en el HTML">) 
$subject = $_POST['asunto'];

//Pagina a donde se dirigirá una vez enviado el Formulario
$redirect = "gracias.htm";

// Cabecera del e-mail recomendamos no tocar
$mailheaders = "From: ".$_POST['Nombre']." <".$_POST['email'].">\n";
$mailheaders .= "Reply-To: ".$_POST['email'];

// ************Fin Configuración**************** 

foreach($_POST as $key => $value) { 

$message .= $key . ': ' . $value; 
$message .= "\n"; 

} 
if (@mail($mailto, $subject, $message, $mailheaders)) { 

header("Location: $redirect"); 
} else { 
// Mensaje de error. 
// modificar texto entre los <p>. 
echo('<p>Error en Formulario por favor escribir a info@gedco.com.ar</p>'); 
} 
?> 
