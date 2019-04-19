<?php
abstract class Model{

  protected $db;

  function __construct() {
    try {
      $this->db = new PDO('mysql:host='.HOST.';dbname='.rtrim(DBNAME).';charset=utf8', 'root','');
    } catch (PDOException $e) {
        header('Location: sql');
        die();
    }
  }
}
?>
