<?php
/*
* Contact Form Class
*/


header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

$admin_email = 'informes@topteamalliance.com';
// $admin_email = 'jmosquera92r@gmail.com';
$message_min_length = 20; // Min Message Length


class Contact_Form{
    function __construct($details, $email_admin, $message_min_length){

        $this->name = stripslashes($details['name']);
        $this->email = trim($details['email']);
        $this->phone = stripslashes($details['phone']);
        $this->member_name = stripslashes($details['jeunesse-member-name']);
        $this->member_phone = stripslashes($details['jeunesse-member-phone']);
        $this->comment = stripslashes($details['comment']);
        $this->presentation = stripslashes($details['presentation']);

        if($this->presentation == 1) {
          $this->presentation = "* SI tuvo la oportunidad de ver una presentación.";
        } else if ($this->presentation == 0){
          $this->presentation = "* NO tuvo la oportunidad de ver una presentación.";
        }

        $this->subject = 'PROSPECTO TOP TEAM ALLIANCE - Landing page';
        $this->message = "Información de prospecto\r\n\r\nNombre: ".$this->name."\r\nCorreo: "
        .$this->email."\r\nCelular: ".$this->phone."\r\nMiembro que lo inivitó: ".$this->member_name." - ".$this->member_phone
        ."\r\n".$this->presentation."\r\n\r\nComentario:".$this->comment;

        $this->email_admin = $email_admin;
        $this->message_min_length = $message_min_length;

        $this->response_status = 1;
        $this->response_html = '';
    }


    private function validateEmail(){
        $regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';

        if($this->email == '') {
            return false;
        } else {
            $string = preg_replace($regex, '', $this->email);
        }

        return empty($string) ? true : false;
    }


    private function validateFields(){
        // Check name
        if(!$this->name)
        {
            $this->response_html .= '<p>Por favor ingrese su nombre</p>';
            $this->response_status = 0;
        }

        // Check email
        if(!$this->email)
        {
            $this->response_html .= '<p>Por favor ingrese su correo electrónico</p>';
            $this->response_status = 0;
        }

        // Check valid email
        if($this->email && !$this->validateEmail())
        {
            $this->response_html .= '<p>Por favor ingrese un correo electrónico válido</p>';
            $this->response_status = 0;
        }
    }


    private function sendEmail(){
        $mail = mail($this->email_admin, $this->subject, $this->message,
             "From: ".$this->name." <".$this->email.">\r\n"
            ."Reply-To: ".$this->email."\r\n"
        ."X-Mailer: PHP/" . phpversion());

        if($mail)
        {
            $this->response_status = 1;
            $this->response_html = '<p>Gracias por contactarnos.</p>';
        }
    }


    function sendRequest(){
        $this->validateFields();
        if($this->response_status)
        {
            $this->sendEmail();
        }

        $response = array();
        $response['status'] = $this->response_status;
        $response['html'] = $this->response_html;

        echo json_encode($response);
    }
}


$contact_form = new Contact_Form($_POST, $admin_email, $message_min_length);
$contact_form->sendRequest();

?>
