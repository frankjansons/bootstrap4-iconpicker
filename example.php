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
	$('.iconpicker').iconPicker();
  });
  </script>
</head>
<body>
<?
if(isset($_POST)) {
	echo '<div class="alert alert-info" alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>$_POST</strong><pre> '.print_r($_POST,true),'</pre></div>';
}
?>
<form action="" method="post">
  <div class="form-group">
    <label for="exampleFormControlInput1">Kies eerste icoontje</label>
    <button id="a" type="button" class="btn btn-default dropdown-toggle iconpicker" placeholder="<? echo isset($_POST['a']) ? $_POST['a'] : ""; ?>"><i>Choose icon</i></button>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Kies tweede icoontje</label>
    <button id="b" type="button" class="btn btn-default dropdown-toggle iconpicker" placeholder="<? echo isset($_POST['b']) ? $_POST['b'] : ""; ?>"><i>Choose icon</i></button>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</body>
</html>