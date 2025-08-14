<?php
    require("config.php");
    header("Content-Type:application/json"); //บอกว่าเป็น JSON format
    if (isset($_GET['eid']) && $_GET['eid']!="") {
        $eid = $_GET['eid']; // id of employee
        require("connect.php"); 
        $result = mysqli_query($link,"SELECT * FROM employee WHERE eid=$eid");

        if(mysqli_num_rows($result)>0){
            $row = mysqli_fetch_array($result, MYSQLI_ASSOC); //อ่านข้อมูลทีละแถว
            $ename = $row["ename"];
            $edep = $row["edep"];
            $etel = $row["etel"];
            response($eid, $ename, $edep,$etel);
            require("unconn.php");
        }else{
            response(NULL, NULL, NULL,"No Record Found");}
        }
    else{ 
    response(NULL, NULL, NULL,"Invalid Request"); 
    }
    function response($eid,$ename,$edep,$etel){
    $result = array("eid"=> $eid, "ename"=>$ename, "edep"=> $edep, "etel"=>$etel);

    echo json_encode($result);
    }
?>