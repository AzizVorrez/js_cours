let btn = document.querySelector('button');
let hidden = true;

btn.addEventListener('click', () => {
    if (hidden){
        btn.textContent = "Caché";
        hidden = false;
        let message = document.createElement('p');
        message.textContent = "Votre message";
        document.body.appendChild(message);
    }
    else {
        hidden = true;
        btn.textContent = "Affiché";
        let message = document.querySelector('p');
        if (message) {
            message.remove();
        }
    }
})