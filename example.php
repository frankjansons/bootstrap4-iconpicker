<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" />
  <script src="https://core2.frankjansons.nl/iconpicker/picker.js"></script>
  <link rel="stylesheet" href="https://core2.frankjansons.nl/iconpicker/picker.css" />
  <script>
  $(document).ready(function() {
	$('#a').iconPicker();
	$('#b').iconPicker();
  });
  </script>
</head>
<body>
<?
if(isset($_POST)) {
	echo '<pre>'.print_r($_POST,true),'</pre>';
}
?>
<form action="" method="post">
  <div class="form-group">
    <label for="exampleFormControlInput1">Kies eerste icoontje</label>
    <button id="a" type="button" class="btn btn-lg btn-outline-secondary dropdown-toggle" placeholder="<? echo isset($_POST['a']) ? $_POST['a'] : ""; ?>"><i>Choose icon</i></button>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Kies tweede icoontje</label>
    <button id="b" type="button" class="btn btn-lg btn-outline-secondary dropdown-toggle" placeholder="<? echo isset($_POST['b']) ? $_POST['b'] : ""; ?>"><i>Choose icon</i></button>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</body>
</html>