<?php
if (isset ( $_POST ['user_message'] )) {
	$to = 'Roni691986@gmail.com';
	$user_name = $_POST ['user_name'];
	$user_mail = $_POST ['user_mail'];
	$user_message = $_POST ['user_message'];
	
	$headers = "From: " . $user_name . "\r\n";
	'X-Mailer: PHP/' . phpversion ();
	if (mail ( $to, "New mail from Roni.pe.hu web site", "Sender: " . $user_name . "\r\nMessage: " . $user_message . "\r\nMail: " . $user_mail, $headers ))
		echo true;
	else
		echo false;
	exit ();
}
?>