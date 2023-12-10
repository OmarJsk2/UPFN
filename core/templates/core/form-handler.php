<?php

$name = $_POST["name"];
$visitors_email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

        

$email_from = "www.wissal-almaarifa.com";
$email_subject = "new form submission";
$email_body = "user_name: $name. \n".
                            "user_email: $visitors_email. \n".
                            "user_subject: $subject. \n".
                            "user_message: $message. \n";

$to = "wissalalmaarifa02@gmail.com";


$headers = "from: $email_from \r\n";

$headers .= "Reply-to: $visitors_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");

?>

<?php

echo "hello world"
?>