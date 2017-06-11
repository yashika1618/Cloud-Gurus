<?php 
	
	if($_POST['send-request'] == 'form-contact'){
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$subject = 'Guru form - '.$name;
		$mess = $_POST['mess'];
		$content  = '<html><body>';
		$content .= 'Name :'.$name.' <br><br>';
		$content .= 'Email :'.$email.' <br><br>';
		$content .= 'Phone :'.$phone.' <br><br>';
		$content .= 'Message :'.$mess.' <br><br>';
		$content .= '</body></html>';
		//$to      = 'jobken90@gmail.com';
		
		$headers = 'From: '.$email.' ' . "\r\n" .
		'Reply-To: '.$email.'' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		
		if(@mail('tyson@savvydigital.com', $subject, $content, $headers) && @mail('steven@savvydigital.com', $subject, $content, $headers))
		{
			echo 1;
		}else{
			echo "Mail Not Sent";
		}
		
		
	}
	
	
	if($_POST['send-request'] == 'form-video-chat'){
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$subject = 'Guru form - '.$name;
		$mess = $_POST['mess'];
		$pdate = $_POST['pdate'];
		$ptime = $_POST['ptime'];
		$content  = '<html><body>';
		$content .= 'Name :'.$name.' <br><br>';
		$content .= 'Email :'.$email.' <br><br>';
		$content .= 'Phone :'.$phone.' <br><br>';
		$content .= 'Preferred Date :'.$pdate.' <br><br>';
		$content .= 'Preferred Time :'.$ptime.' <br><br>';
		$content .= 'Phone :'.$phone.' <br><br>';
		$content .= 'Message :'.$mess.' <br><br>';
		$content .= '</body></html>';
		//$to      = 'jobken90@gmail.com';
		
		$headers = 'From: '.$email.' ' . "\r\n" .
		'Reply-To: '.$email.'' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		
		if(@mail('tyson@savvydigital.com', $subject, $content, $headers) && @mail('steven@savvydigital.com', $subject, $content, $headers))
		{
			echo 1;
		}else{
			echo "Mail Not Sent";
		}
		
		
	}
	
	
	
exit();
	
?>