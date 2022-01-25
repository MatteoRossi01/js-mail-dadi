/* Creo la variante in riferimento al bottone per laciare i dadi */
const rollPlayer = document.getElementById('roll');
let nome = prompt('Scrivi il tuo nome!');

document.getElementById('title-player').innerHTML = nome;

rollPlayer.addEventListener('click', 
    function() {
        /* Generazione casuale del numero per il giocatore */
        let numberPlayer = Math.floor(Math.random() * 6) + 1;
        console.log(numberPlayer)

        document.getElementById('number-player').innerHTML = numberPlayer;

        /* Generazione casuale del numero per il computer */
        let numberComputer = Math.floor(Math.random() * 6) + 1;
        console.log(numberComputer)

        document.getElementById('number-computer').innerHTML = numberComputer;

        if (numberPlayer < numberComputer) {
            document.getElementById('title-risultato-2').style.display='inline';
            document.getElementById('title-risultato-1').style.display='none'; 
            document.getElementById('title-risultato-3').style.display='none';
        } else if (numberPlayer > numberComputer) {
            document.getElementById('title-risultato-1').style.display='inline';
            document.getElementById('title-risultato-2').style.display='none'; 
            document.getElementById('title-risultato-3').style.display='none'; 
        } else if (numberPlayer == numberComputer) {
            document.getElementById('title-risultato-3').style.display='inline';
            document.getElementById('title-risultato-1').style.display='none'; 
            document.getElementById('title-risultato-2').style.display='none';
        }
    }
)
