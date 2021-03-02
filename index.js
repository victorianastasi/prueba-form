// Transformar primer letra en mayúscula y el resto en minúscula
function capitalizeFirstLetter(example) {
    return example.charAt(0).toUpperCase() + example.slice(1).toLowerCase();
}

$(document).ready(function() {
    let userName = $('#nombre');
    let userMsj= $('#msj');
    let userMail = $('#email');

    function validateSuscription(nombre, mensaje, mail){
        if(nombre.val() != "" && mensaje.val() != "" && mail.val() != ""){
            if(mail.val().includes("@")){
                $('#suscribe').html(`
                <p>Gracias ${capitalizeFirstLetter(nombre.val())} por suscribirte!!</p>
                <p>Te enviaremos nuestras promociones a ${mail.val().toLowerCase()}</p>
                <p style="font-size: 2rem; color: rgb(188, 143, 143)"><i class="far fa-smile-beam"></i></p>
                `).css({"margin-bottom": "0rem", "font-family": "'Pangolin', cursive", "color": "rgb(98, 101, 103)", "text-shadow": "5px 5px 5px rgb(200, 197, 189)", "display": "none"});
                $('#suscribe').slideDown(1000);
                $('.form-control').css({"border" : "inherit"});
                $('#sendForm').animate({
                    width : "60%",
                    padding : "1rem 0"
                }, 600);
                $('#sendForm').html(`Enviado! <span class="material-icons" style="font-size: 1.5rem; line-height: 24px; display: inline-flex; vertical-align: top">mark_email_read</span>`);
                $('#sendForm').css({backgroundColor : "rgb(41, 41, 41)", fontWeight : "500", color : "rgb(255, 255, 255)", fontFamily : "'Pangolin', cursive", border : "3px solid rgb(212, 189, 184)"});
                $('html, body').animate({
                    scrollTop: $("#sendForm").offset().top
                }, 400);
            }else{
                $('#suscribe').html(`<p>Por favor, incluye el signo @ en la dirección de tu correo electrónico.</p>`).css({"color": "rgb(173, 26, 26)", "font-weight": "600"});
                mail.css({"border" : "2px solid rgb(173, 26, 26)"});
                nombre.css({"border" : "inherit"});
                mensaje.css({"border" : "inherit"});
            }
        }
        else{
            $('#suscribe').html(`
            <p>Por favor, completá los datos solicitados *</p>`).css({"color": "rgb(173, 26, 26)", "font-weight": "600"});
            //Marco el input que no contiene datos
            if(nombre.val().length == 0){
                nombre.css({"border" : "2px solid rgb(173, 26, 26)"});
            }else if (mensaje.val().length == 0){
                mensaje.css({"border" : "2px solid rgb(173, 26, 26)"});
            }else if (mail.val().length == 0){
                mail.css({"border" : "2px solid rgb(173, 26, 26)"});
            }
        }
    }

    //Validacion de los datos ingresados en los inputs al hacer click en Enviar
    $('#sendForm').click(function (){
        validateSuscription(userName, userMsj, userMail);
    });
    

    //Si el usuario da enter en un input, se validan los datos ingresados
    $('.form-control').keypress(function(event){
        if(event.which == 13) { 
            validateSuscription(userName, userMsj, userMail);
        }
    });

    //Al hacer focus en el input, el mensaje previo de suscripción no se muestra, y el input vuelve a su estilo original
    $('.form-control').focus(function cleanMsgSuscription(){
        $('#suscribe').html(``);
        $('.form-control').css({"border" : "inherit"});
    });
    
});