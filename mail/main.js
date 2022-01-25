/* Variabile bottone conferma */
const conferma = document.getElementById('avanti');
console.log(avanti)

conferma.addEventListener('click', 
    function() {

        /* Array mail ammesse */
        const mailAmmesse = ['matteorossi01@gmail.com', 'matteorossi@gmail.com', 'pippo@gmail.com' ,'rossi@gmail.com']

        /* Variabile text-area mail */
        const mail = document.getElementById('mail').value;
        console.log(mail)

        for (let i=0; i<mailAmmesse.length; i++) {

            if (mailAmmesse[i] == mail) {
                document.getElementById('email-corretta').style.display='block'; 
                document.getElementById('email-error').style.display='none';
            } else {
                document.getElementById('email-error').style.display='block';
                document.getElementById('email-corretta').style.display='none'; 
            }
        }     
    }
 )
            