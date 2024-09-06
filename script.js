
async function PesquisarClima() {
    const key = "ce7ea5c955f36d1eef824a4b458a8950";
    let local = document.getElementById('cidade').value;

    const dado = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${key}&units=metric&lang=pt_br`).then(
        (Response) => Response.json()
    );

    console.log(dado);

    document.getElementById('temperatura').value = dado.main.temp +"C°";
    document.getElementById('main').value = dado.main.humidity+" umidade";
    document.getElementById('temp_min').value = dado.main.temp_min+"C°";
    document.getElementById('temp_max').value = dado.main.temp_max+"C°";
} 
function Limpar(){
    document.getElementById('temperatura').value = null;
    document.getElementById('main').value = null;
    document.getElementById('temp_min').value = null;
    document.getElementById('temp_max').value = null;
    document.getElementById('cidade').value = null;
}