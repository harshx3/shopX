import React, {  useState } from 'react';
import './SignUp.css';
import { useAuth } from '../../components/Authenticator/Authenticator';

const SignUp = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const {signup, goBack} = useAuth();

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    // useEffect( ()=> {
    //     const storedFormData = localStorage.getItem('formDta');
    //     if(storedFormData) {
    //         const formDataObj=(JSON.parse(storedFormData));
    //         console.log('dataset',formDataObj)
    //     }
    // },[]);

    const signupHandler = (e)=> {
         e.preventDefault();
        signup(formData);
    }

  return (
    <>
    <div className='signUpForm'>
        <div className='signup-title'>
        <h2>Sign up</h2>
        </div>
        <div className='form-grp-container'>
        <div className='form-group'>
        <label htmlFor='name'>Name:</label>
        <input type='name' id='name' name='name' onChange={changeHandler} value={formData.name} required />
        </div>

        <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' onChange={changeHandler} value={formData.email} required />
        </div>
        
        <div className='form-group'>
            <label htmlFor='pass'>Password</label>
            <input type='password' id='pass' name='password' onChange={changeHandler} value={formData.password} required />
        </div>

        <div className='btnDiv'>
            <button onClick={signupHandler}>Sign Up</button>
        </div>
        </div>
    </div>
        <button onClick={goBack} className='backBtn'>Go Back</button>
    </>
  )
}

export default SignUp;