import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const goBack = ()=> {
       navigate(-1);
    }


    return(
        <AuthContext.Provider value={ {login, isLoggedIn, logout, signup, goBack} }>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = ()=> {
    return useContext(AuthContext);
}

