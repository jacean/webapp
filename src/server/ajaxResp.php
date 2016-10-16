<?php

$total=10;
$current=$_GET["current"];

$r=array("total" => $total, "current" => (int)$current,"url"=>"../resource/img/ning".$current.".jpg");

echo json_encode($r);
?>