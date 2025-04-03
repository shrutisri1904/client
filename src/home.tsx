import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
    axios.defaults.withCredentials = true;
    const navigate = useNavigate();
    useEffect(()=> {
        axios.get("http://localhost:3001/home")
        .then((result: any) => {
            console.log(result)
            if(result.data !== 'Success')
                navigate("/login")

        })
        .catch((err: Error) => console.log(err))
    }, [])
return (
    <h2>Home Component</h2>
)
}

export default Home;