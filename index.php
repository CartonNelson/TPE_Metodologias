<?php
include_once 'sql/'; //BBDD

 require_once('controllers/Denuncias_Controller.php');
 require_once('config/configApp.php');

$Denuncias_Controller =new Denuncias_Controller();

if (!array_key_exists(ConfigApp::$ACTION,$_REQUEST)){
  // accion inicial
  die();
}

switch ($_REQUEST[ConfigApp::$ACTION]) {
  case 


      break;
  
}
 ?>
