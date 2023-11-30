import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";



const AuthContext = createContext();

export const AuthProvider = ({children})=> {

   const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const login = (username, password)=> {
       const isSuccess =  username === 'admin@gmail.com' && password === 'pass';
       if(isSuccess){
        navigate('/')
        setIsLoggedIn(true);
        console.log('login',isLoggedIn)
       }
       else {
        alert("Invalid Credentials");
       }
    }

    const logout = ()=> {
        setIsLoggedIn(false);
        console.log('logout',isLoggedIn);
    }

    const signup = (formData) =>{
        const {name, email, password} = formData;
        if(!name.trim() || !email.trim() || !password.trim()){
         alert("Please enter all ther details");
        }
         //  console.log(formData);
         localStorage.setItem('formData', JSON.stringify(formData));
    }


    return(
        <AuthContext.Provider value={ {login, isLoggedIn, logout, signup} }>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = ()=> {
    return useContext(AuthContext);
}

