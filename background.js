const selectElement = document.querySelector('#background-select');

selectElement.addEventListener('change', (event) => {
    document.body.style.backgroundImage = `url(${event.target.value})`;
});