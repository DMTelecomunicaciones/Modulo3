import React, { useState } from 'react';  
import axios from 'axios';  

const Register = () => {  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        await axios.post('http://localhost:5000/api/auth/register', { email, password });  
        // Manejar la respuesta  
    };  

    return (  
        <form onSubmit={handleSubmit}>  
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />  
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />  
            <button type="submit">Registrarse</button>  
        </form>  
    );  
};  

export default Register;  