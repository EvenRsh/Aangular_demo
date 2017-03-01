<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<?php 
		$name = 'yao';
		$style = 'red';
		$channel = array('a','b','c');
	?>

	<body>
		<div>
			<p class="red" id="<?php echo $name ?>">
				<?php echo $name ?>
			</p>
			<ul>
				<?php foreach ($channel as $c):?>
				<?php echo '<li>'.$c.'</li>';?>
				<?php endforeach;?>
			</ul>

			<ul>
				<?php
					$i = 0;
					for($i;$i<count($channel);$i++){
						echo '<li>'.$channel[$i].'</li>';
					}
				?>
			</ul>

			<!--ng-repeat-->
			<div style="display: <?php ;?>;"></div>
		</div>
		<style>
			.red {
				color: <?php echo $style;
				?>;
			}
		</style>
	</body>
	<script>
		var a = '<?php echo 'abc';?>';
		console.log(a);
	</script>

</html>