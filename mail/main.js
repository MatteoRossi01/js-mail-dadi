/* Variabile bottone conferma */
const conferma = document.getElementById('avanti');
console.log(conferma)

conferma.addEventListener('click', 
    function() {

        /* Array mail ammesse */
        const mailAmmesse = ['matteorossi01@gmail.com', 'matteorossi@gmail.com', 'pippo@gmail.com' ,'rossi@gmail.com']

        /* Variabile text-area mail */
        const mail = document.getElementById('mail').value;
        console.log(mail)

        for (let i=0; i<mailAmmesse.length; i++) {
            var element = mailAmmesse[i];
            console.log(element)

            if (element == mail) {
                document.getElementById('email-corretta').innerHTML='La mail che hai inserito è corretta'; 
                document.getElementById('email-error').style.display='none';
            } if (element != mail) {
                document.getElementById('email-error').innerHTML='Impossibile trovare il tuo account google'; 
            }
        }     
    }
 )
            