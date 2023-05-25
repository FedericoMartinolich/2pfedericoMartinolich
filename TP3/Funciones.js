function miFuncion() {
    const min = 1;
    const max = 826;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const url1 = "https://randomuser.me/api/";
    const url2 = 'https://rickandmortyapi.com/api/character/' + randomNumber;

    const promesa1 = fetch(url1).then(response => response.json());
    const promesa2 = fetch(url2).then(response => response.json());

    Promise.all([promesa1, promesa2])
        .then(responses => {
            const respuesta1 = responses[0];
            const respuesta2 = responses[1];
            
            // Datos de randomuser
            let element = document.getElementById("texto1");
            element.innerHTML = `
                <p>Nombre: ${respuesta1.results[0].name.first}</p>
                <p>Apellido: ${respuesta1.results[0].name.last}</p>
                <p>Género: ${respuesta1.results[0].gender}</p>
                <p>ID: ${respuesta1.results[0].id.name}, ${respuesta1.results[0].id.value}</p>
                <p>Coor: latitud=(${respuesta1.results[0].location.coordinates.latitude}) / longitud=(${respuesta1.results[0].location.coordinates.longitude})</p>
                <p><img src="${respuesta1.results[0].picture.thumbnail}"></p>
            `;
            
            
            // Color de randomuser
            if (respuesta1.results[0].gender === "male") {
                element.style.backgroundColor = "green";
            } else if (respuesta1.results[0].gender === "female") {
                element.style.backgroundColor = "yellow";
            }
            
            // Datos de Rick&Morty
            let element2 = document.getElementById("texto2");
            element2.innerHTML =`
            <p>Nombre: ${respuesta2.name}</p>
            <p>Genero: ${respuesta2.gender}</p>
            <p><img src=${respuesta2.image} width="50vh" height="50vh"></p>  
            `
            
            // Color de Rick&Morty
            if (respuesta2.gender === "Male") {
                element2.style.backgroundColor = "green";
            } else if (respuesta2.gender === "Female") {
                element2.style.backgroundColor = "yellow";
            }
            
            // Comparar generos randomuser y Rick&Morty
            if (respuesta1.results[0].gender === "female" && respuesta2.gender === "Female") {
                let element3 = document.getElementById("tilde");
                element3.innerHTML = `
                <p><img src= https://vivilibros.com/wp-content/uploads/2020/06/tilde-verde-transparente.png  width="200" height="200"></p>
                `
            }
            else if (respuesta1.results[0].gender === "male" && respuesta2.gender === "Male") {
                let element3 = document.getElementById("tilde");
                element3.innerHTML = `
                <p><img src= https://vivilibros.com/wp-content/uploads/2020/06/tilde-verde-transparente.png  width="200" height="200"></p>
                `
            }
            else  {
                let element3 = document.getElementById("tilde");
                element3.innerHTML = `
                <p><img src= https://www.avezalia.es/wp-content/uploads/2015/05/Cancelaci%C3%B3n.png  width="200" height="200"></p>
                `
            }

            // Mapa de leaflet
            var map = L.map('map').setView([respuesta1.results[0].location.coordinates.latitude, respuesta1.results[0].location.coordinates.longitude], 1);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        })
        .catch(error => {
            // Manejo de errores
            console.error('Error:', error);
        });
}