let api_key = "1234";


function respuesta(){
    fetch('http://localhost/M8/UF2/ProyectoM8/calc.py',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data =>console.log(data))
    .catch(error=>console.log(error));
}