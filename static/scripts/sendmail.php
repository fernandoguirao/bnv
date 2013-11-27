<?php
// Who you want to recieve the emails from the form.
$sendto = 'fernando@bueninvento.es';

// The subject you'll see in your inbox
$subject = 'Un mensaje de la web de Bueninvento';

// Message for the user when he/she doesn't fill in the form correctly.
$errormessage = 'Parece que no has rellenado todos los campos';

//Message for the user when he/she fills in the form correctly.
$thanks = "Gracias por ponerte en contacto con nosotros. En breve te responderemos.";

// Message for the bot when it fills in in at all.
$honeypot = "Si eres humano, ¡inténtalo de nuevo!";

// Various messages displayed when the fields are empty.
$emptyname =  'Parece que no has rellenado tu nombre';
$emptyemail = 'Parece que no has indicado tu dirección de email';
$emptymessage = 'Necesitamos un mensaje';

// Various messages displayed when the fields are incorrectly formatted.
$alertname =  'Utiliza sólo letras minúsculas y mayúsculas y números';
$alertemail = 'Este es el formato de email que deberías introducir <i>nombre@ejemplo.com</i>?';
$alertmessage = "Por favor revisa que no hayas introducido algún símbolo no soportado";

$alert = '';
$pass = 0;

function clean_var($variable) {
	$variable = strip_tags(stripslashes(trim(rtrim($variable))));
  return $variable;
}

if ( empty($_REQUEST['last']) ) {

  if ( empty($_REQUEST['name']) ) {
	$pass = 1;
	$alert .= "<li>" . $emptyname . "</li>";
	$alert .= "<script>jQuery(\"#name\").addClass(\"error\");</script>";
  } elseif ( ereg( "[][{}()*+?.\\^$|]", $_REQUEST['name'] ) ) {
	$pass = 1;
	$alert .= "<li>" . $alertname . "</li>";
  }
  if ( empty($_REQUEST['email']) ) {
	$pass = 1;
	$alert .= "<li>" . $emptyemail . "</li>";
	$alert .= "<script>jQuery(\"#email\").addClass(\"error\");</script>";
  } elseif ( !eregi("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$", $_REQUEST['email']) ) {
	$pass = 1;
	$alert .= "<li>" . $alertemail . "</li>";
  }
  if ( empty($_REQUEST['message']) ) {
	$pass = 1;
	$alert .= "<li>" . $emptymessage . "</li>";
	$alert .= "<script>jQuery(\"#message\").addClass(\"error\");</script>";
  } elseif ( ereg( "[][{}()*+\\^$|]", $_REQUEST['message'] ) ) {
	$pass = 1;
	$alert .= "<li>" . $alertmessage . "</li>";
  }

  if ( $pass==1 ) {

  echo "<script>$(\".message\").toggle();$(\".message\").toggle().hide(\"slow\").show(\"slow\"); </script>";
  echo "<script>$(\".alert\").addClass('alert-block alert-error').removeClass('alert-success'); </script>";
  echo $errormessage;
  echo $alert;

  } elseif (isset($_REQUEST['message'])) {

	$message = "From: " . clean_var($_REQUEST['name']) . "\n";
	$message .= "Email: " . clean_var($_REQUEST['email']) . "\n";
	$message .= "Message: \n" . clean_var($_REQUEST['message']);
	$header = 'From:'. clean_var($_REQUEST['email']);

	mail($sendto, $subject, $message, $header);
	echo "<script>$(\".message\").toggle();$(\".message\").toggle().hide(\"slow\").show(\"slow\");$('#contactForm')[0].reset();</script>";
	echo "<script>$(\".alert\").addClass('alert-block alert-success').removeClass('alert-error'); </script>";
	echo $thanks;
	echo "<script>jQuery(\"#name\").removeClass(\"error\");jQuery(\"#email\").removeClass(\"error\");jQuery(\"#message\").removeClass(\"error\");</script>";
	die();

	echo "<br/><br/>" . $message;

	}

} else {
  echo "<script>$(\".message\").toggle();$(\".message\").toggle().hide(\"slow\").show(\"slow\"); </script>";
  echo $honeypot;
}
?>