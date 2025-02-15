const express = require('express');  
const bcrypt = require('bcryptjs');  
const jwt = require('jsonwebtoken');  
const User = require('../models/User');  
const router = express.Router();  

router.post('/register', async (req, res) => {  
    const { email, password } = req.body;  
    const hashedPassword = await bcrypt.hash(password, 10);  
    const user = await User.create({ email, password: hashedPassword });  
    res.status(201).json(user);  
});  

router.post('/login', async (req, res) => {  
    const { email, password } = req.body;  
    const user = await User.findOne({ where: { email } });  
    if (user && await bcrypt.compare(password, user.password)) {  
        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });  
        res.json({ token });  
    } else {  
        res.status(401).json({ message: 'Credenciales inválidas' });  
    }  
});  

module.exports = router;  