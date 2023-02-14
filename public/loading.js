

const loading = document.getElementById('loading')
const element = document.getElementById("subBtn");
const lg = document.getElementById('lg')


function onLoad() {
    loading.style.display = 'block'
    lg.style.color = "White";
}

element.addEventListener("click", onLoad);
