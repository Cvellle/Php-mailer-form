<?php 
    $arr = array();
    $con=new mysqli("localhost","root","","test");
    $sql = "SELECT * FROM usersNikola";
    if($result = $con->query($sql) ){
        while($row = $result->fetch_assoc()){
            $arr[] = $row;
        }
        echo json_encode($arr);
    }
?>