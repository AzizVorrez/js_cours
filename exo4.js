let input = document.querySelector('#prix');
let erreur = document.querySelector('small');
let formulaire = document.querySelector("#formulaire");

erreur.style.display = 'none';

let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        erreur.style.display = 'inline';
    }
    else {
        erreur.style.display = "none";
    }
});

formulaire.addEventListener('submit', (e) => {
    e.preventDefault()
    if (isNaN(input.value) || input.value == "") {
        input.style.borderColor = 'red';
    }
    else {
        coups++;
        input.style.borderColor = 'silver';
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi)
    }
});

function verifier(nombreChoisi) {
    let instruction = document.createElement('div');
    
    if(nombreChoisi < nombreAleatoire){
        instruction.textContent = '#' + coups + " (" + nombreChoisi + ') c\'est plus !';
        instruction.className = 'instruction plus';
    }
    else if ( nombreChoisi > nombreAleatoire ){
        instruction.textContent = '#' + coups + " (" + nombreChoisi + ') c\'est moin !';
        instruction.className = 'instruction moin';
    }
    else {
        instruction.textContent = '#' + coups + " (" + nombreChoisi + ') Félicitation vous avez trouvé !';
        instruction.className = 'instruction fini';
    }

    let addinstruction = document.querySelector('#instructions')

    addinstruction.prepend(instruction)
}