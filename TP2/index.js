/*function funcion(){
    const jugador={
        nombre:'Barrios',
        edad: 24,
        activo:true,
        colores:['amarillo','blanco'],
        apodo: 'Perrito',
        saludar: function(){
            return "Hola"
        }
    }
    console.log(jugador);
}*/

/*function miFuncion(){
    fetch("https://rickandmortyapi.com/api/character/1")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.name,data.status)
    })
}*/

function miFuncion(pers){
    const url = "https://rickandmortyapi.com/api/character/"
    fetch(url + pers)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let element = document.getElementById("texto")
        element.innerHTML = `
            <p>Nombre: ${data.name}</p>
            <p><img src=${data.image}></p>              
            <p>Estado: ${data.status}</p>
            <p>Especie: ${data.species}</p>
            <p>Cantidad de episodios: ${data.episode.length}</p>

        `

    })
}