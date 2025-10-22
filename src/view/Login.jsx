import React, { useEffect, useState } from "react";
import api from "../api";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
    const navigate = useNavigate();
    // const axios = api();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if(params.get('logout') === 'success') {
            setSuccess('Logout success')
        }
    }, [location])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setSuccess('');
        // setError('');
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/v1/auth/login',
                {
                    'id_card_number': username,
                    'password': password
                },
                
            )
            
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('username', response.data.name)
            setTimeout(() => {
                navigate('/dashboard');
            }, 1500);
            console.log(response.data)
        } catch (error) {
            setError('ID Card Number or Password incorrect')
            
            console.log(error.response.data.message)
        }
    }
    return (
        <>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
    <div class="container">
        <a class="navbar-brand" href="#">Job Seekers Platform</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<main>
    
    <header class="jumbotron">
        <div class="container text-center">
            <h1 class="display-4">Job Seekers Platform</h1>
        </div>
    </header>
    

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form class="card card-default" onSubmit={handleSubmit}>
                    <div class="card-header">
                        <h4 class="mb-0">Login</h4>
                    </div>
                    <div class="card-body">
                        <div class="form-group row align-items-center">
                            <div class="col-4 text-right">ID Card Number</div>
                            <div class="col-8"><input 
                            type="text" 
                            value={username}
                            class="form-control"
                            onChange={(e) => setUsername(e.target.value)}
                            />
                            </div>
                        </div>
                        <div class="form-group row align-items-center">
                            <div class="col-4 text-right">Password</div>
                            <div class="col-8"><input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            class="form-control"
                            />
                            </div>
                        </div>
                        <div class="form-group row align-items-center mt-4">
                            <div class="col-4"></div>
                            <div class="col-8"><button class="btn btn-primary">Login</button></div>
                        </div>
                    {error && (
                        <div className="alert alert-danger mt-3">
                            {error}
                            </div>
                    )
                    }
                    {success && (
                        <div className="alert alert-success mt-3 text-center">
                            {success}
                            </div>
                    )}
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>


<footer>
    <div class="container">
        <div class="text-center py-4 text-muted">
            Copyright &copy; 2023 - Web Tech ID
        </div>
    </div>
</footer>
        </>
    )
}

export default Login;