api/hotel.js (Ejemplo de api);

const express = require('express');  
const router = express.Router();  

// Simulación de base de datos  
const hotels = [  
    { id: 1, name: 'Hotel A', address: 'Calle 1', price: 100 },  
    { id: 2, name: 'Hotel B', address: 'Calle 2', price: 150 },  
];  

router.get('/', (req, res) => {  
    const { location, checkin, checkout } = req.query;  
    // Aquí iría la lógica para filtrar hoteles según la búsqueda  
    res.json(hotels);  
});  

module.exports = router;  