var input = document.querySelector('#url');

input.addEventListener('keyup', (key) => {
    if (key.keyCode == 13) { 
        if (!input.value.trim().length) return;
        window.location.assign(`/prox/?url=${btoa(input.value)}`);
    }
});


document.querySelector("#initiate").addEventListener('click', () => {

    if (!input.value.trim().length && input.value != "accounts.google.com") return;
    window.location.assign(`/prox/?url=${btoa(input.value)}`);

});