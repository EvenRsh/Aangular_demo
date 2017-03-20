<?php 
	$data = file_get_contents($_GET['url']);
	echo $_GET['callback'].'('.$data.')';
 ?>
