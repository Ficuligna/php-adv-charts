<?php
header("Content-Type: application/json");
require_once "data.php";
$labels=[];
$sell=[];
foreach ($graphs["fatturato_by_agent"]["data"] as $name => $value) {
  $labels[]=$name;
  $sell[]=$value;
}
$data=[
  "fatturato" => $graphs["fatturato"],
  "typeAgent" => "pie",
  "labels"    => $labels,
  "sell"      => $sell
];


echo json_encode($data);
