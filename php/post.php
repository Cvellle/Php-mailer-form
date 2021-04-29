<?php

require 'PHPMailerO/PHPMailerAutoload.php';
$eUser = $_POST['email'];
$mail = new PHPMailer;

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';   
$mail->SMTPSecure = 'ssl';
//$mail->SMTPSecure = 'tls';             
$mail->SMTPAuth = true;     
$mail->Port = 465;      

// PROMENI OVDE ZA SVOJE
$mail->Username = 'n.cuekisa@gmail.com';               
$mail->Password = 'gmPassEnv';                           
$mail->setFrom('n.cuekisa@gmail.com', 'First Last');

$mail->addAddress($eUser, 'User');
$mail->addAddress('n.cuekisa@gmail.com', 'User');
$mail->addAddress('nikolacvetic86@gmail.com', 'User');

//$mail->isHTML(true);
$mail->IsHTML(true);                                  
$mail->Subject = "Here is the subject";
$mail->Body    = '<div style="padding:100px; background:rgb(235, 209, 209); font-size: 20px; font-weight:600;">
  <div style="height:50px; display:flex; align-items:center;">Ime: '.$_POST['first_name'].'</div>
  <div style="height:50px; display:flex; align-items:center;">Prezime: '.$_POST['last_name'].'</div>
  <div style="height:50px; display:flex; align-items:center;">E-mail: '.$_POST['email'].'</div>
  <div style="height:50px; display:flex; align-items:center;">Aresa: '.$_POST['address'].'</div>
  <div style="height:50px; display:flex; align-items:center;">Grad: '.$_POST['city'].'</div>
  <div style="height:50px; display:flex; align-items:center;">Telefon: '.$_POST['phone'].'</div>
  <div style="height:50px; display:flex; align-items:center;">Vino1: '.$_POST['wine1'].'</div>
  <div style="height:50px; display:flex; align-items:center;">Vino2: '.$_POST['wine2'].'</div>
  <div style="height:50px; display:flex; align-items:center;">Vino3: '.$_POST['wine3'].'</div>

  </div>';

if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
} 

// <div style="height:50px; display:flex; align-items:center;">Vino: '.$_POST['wine4'].'</div>
// <div style="height:50px; display:flex; align-items:center;">Vino: '.$_POST['wine5'].'</div>

?>

