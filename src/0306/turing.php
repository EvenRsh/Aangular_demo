<?php
$apiKey = "c75ba576f50ddaa5fd2a87615d144ecf";
$apiURL = "http://www.tuling123.com/openapi/api?key=KEY&info=INFO";

header("Content-type: text/html; charset=utf-8");
$reqInfo = $_GET['que'];
$url = str_replace("INFO", $reqInfo, str_replace("KEY", $apiKey, $apiURL));
$res = file_get_contents($url);

echo $res;
?>