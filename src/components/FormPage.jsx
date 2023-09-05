import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './FormPage.css'

const FormPage = () => {

  const [errorV, setErrorV] = useState(false);
  const [errorMessage,setErrorMessage]= useState('')
  
  const navigate= useNavigate();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) =>{   
    // console.log(userName,password);
    e.preventDefault();

    try{
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
    
          username: userName,
          password: password,
        })
      });
      // .then(res => res.json())
      // .then(console.log(res));
      const data= await res.json();
      console.log(data);

      if (res.ok) {
        navigate('/');
      }

      else{
          setErrorV(true);
          setErrorMessage(data['message']);
          console.log(errorMessage);

      }

    }
    catch(error){
      console.log(error);
    }


  }




  return (
    <div>
        <div className="form-head">
          <h1 className='heading'>Sign in to Nike+</h1>
          <p>Please enter your login information to access your Nike+ account.</p>
        </div>

        <div className="form-content">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' name='username' required value={userName} onChange={(e) => setUserName(e.target.value)}/> <br/>

            <label htmlFor="password">Password</label>
            <input type="password" id='password' name='password' required value={password} onChange={(e) => setPassword(e.target.value)}/> <br/>

            <button id='submit-button' type="submit" >Submit</button>

            <h3>{errorMessage}</h3>
          </form>
        </div>



    </div>
  )
}

export default FormPage;