const url = "https://blockchain.info/ticker"

async function bitcoinPrice() {
    // let request = new XMLHttpRequest();

    // request.open('GET', url);

    // request.responseType = 'json';

    // request.send();

    // request.onload =  function() {
    //     if (request.readyState == XMLHttpRequest.DONE) {
    //         if (request.status = 200) {
    //             let response = request.response;
    //             let prixEnEuro = response.EUR.last;
    //             let price_label = document.querySelector('#price_label')
    //             price_label.textContent = prixEnEuro
    //         }
    //         else {
    //             alert('Il y a eu une problème ! Nous gérons la situation au plus vite');
    //         }
    //     }
    // }
    // console.log('DONE')

    const requete = await fetch(url, {
        method : 'GET'
    });
    if (!requete.ok){
        alert('Il y a eu une erreur');
    } else {
        let donnees = await requete.json();
        let price_label = document.querySelector('#price_label');
        price_label.textContent = donnees.EUR.last;
    }
    

}

setInterval(bitcoinPrice, 1000)