let ville = "paris";

recevoirTemperature(ville);

let changer = document.querySelector('#changer');

changer.addEventListener('click', () => {
    ville = prompt('Quelle est votre ville ? ');
    recevoirTemperature(ville);
})


function recevoirTemperature(ville) {
    let temperature = document.querySelector('#temperature_label');


    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville +'&appid=e2609932996f83e83305344bb8f3453e&units=metric';

    let requete = new XMLHttpRequest();

    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
            if ( requete.status == 200){
                let response = requete.response;
                temperature.textContent = response.main.temp;
                ville = document.querySelector('#ville');
                ville.textContent = response.name;

                console.log(response.main.temp);
            }
            else {
                console.log('Une erreur est survenue !');
            }
        }
    }
}
