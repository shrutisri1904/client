import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password})
        .then((result: any) => {
            console.log(result)
            if(result.data === 'Success') {
                navigate('/home');
            }
        })
        .catch((err: Error) => console.log(err))
    }
return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input 
                    type="text"
                    placeholder="Enter Email"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input 
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    className="form-control rounded-0"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                <p>Don't have account?</p>
                <Link to="/reister" className="btn btn-default border w-100 bg-light rounded-0 text=decoration-none">Signup</Link>
            </form>
        </div>
    </div>
)
}

export default Login;