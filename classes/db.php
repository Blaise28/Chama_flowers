<?php
function connexion_db(){
    $url = "mysql:dbname=chama_flowers;host=localhost";
    $user = "root";
    $password = "";

    try {
        $con = new PDO($url,$user,$password);
    } catch (PDOException $e) {
        var_dump($e);
    }
    return $con;
}
function insert($query){
    $con = connexion_db();
    $query_statement = $con->query($query);
    if($query_statement === false){
        return false;
    }else{
        return true;
    }
}
function select($query){
    $con = connexion_db();
    $query_statement = $con->query($query);
    if($query_statement === false){
        var_dump($con->errorInfo());
    }
    return $query_statement;
}
function update($query){
    $con = connexion_db();
    $query_statement = $con->query($query);
    var_dump($query_statement);
    if($query_statement === false){
        return false;
    }else{
        return true;
    }
}
?>