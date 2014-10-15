var $btnHome = $('#Home'),
	$btnContact = $('#btnContact'),
	$btnPublicaciones = $('#btnPublicaciones'),
	$btnventana_Modal = $('#btn_VModal'),
	$Home = $('#Cont-Home'),
	$Contacto = $('#Cont-Contacto'),
	$Publicaciones = $('#publicaciones'),
	$Ventana_Modal = $('#Content_Ventana_Modal'),
	$btn_VModal_exit = $('#btn_exit');

function mostrarHome(){
	$Home.fadeIn();
	$Contacto.hide();
	$Publicaciones.hide();
}

function mostrarContacto(){
	$Contacto.fadeIn();
	$Home.hide();
	$Publicaciones.hide();
}

function mostrarPublicaciones(){
	$Publicaciones.fadeIn();
	$Home.hide();
	$Contacto.hide();
}

function mostrarVentanaModal(){
	$Ventana_Modal.fadeIn();
}

function CerrarVentanaModal(){
	$Ventana_Modal.fadeOut();
}

$btnHome.click( mostrarHome );
$btnContact.click( mostrarContacto );
$btnPublicaciones.click( mostrarPublicaciones );
$btnventana_Modal.click( mostrarVentanaModal );
$btn_VModal_exit.click( CerrarVentanaModal );