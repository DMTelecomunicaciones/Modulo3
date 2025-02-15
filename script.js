document.getElementById('searchBtn').addEventListener('click', function() {  
    const location = document.getElementById('location').value;  
    const checkin = document.getElementById('checkin').value;  
    const checkout = document.getElementById('checkout').value;  

    // Aquí iría la llamada a la API para obtener los hoteles  
    fetch(`/api/hotel?location=${location}&checkin=${checkin}&checkout=${checkout}`)  
        .then(response => response.json())  
        .then(data => {  
            const hotelList = document.getElementById('hotelList');  
            hotelList.innerHTML = '';  
            data.forEach(hotel => {  
                hotelList.innerHTML += `<div>  
                    <h3>${hotel.name}</h3>  
                    <p>${hotel.address}</p>  
                    <p>Precio: ${hotel.price}</p>  
                    <button onclick="reserve('${hotel.id}')">Reservar</button>  
                </div>`;  
            });  
        });  
});  

function reserve(hotelId) {  
    // Lógica para reservar un hotel  
    alert(`Reservando hotel con ID: ${hotelId}`);  
}  