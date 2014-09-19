<?php

  # we can do anything that we want to here
  # like saving the information a database, doh.
#echo $_POST['content'] . ' from PHP';

$content = $_POST['content'];

$f = fopen('data.txt', 'w');
fwrite($f, $_POST['content']);
fclose($f);

echo $content .' ,from PHP';
