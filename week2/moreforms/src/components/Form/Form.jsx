import React, {useState} from 'react'
import './Form.scss'

const Form = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [fnErrorMsg, setFNErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

  const createUser = (e) => {
    e.preventDefault();

    const newUser = {firstName, lastName, email, password, confirmPassword};
    console.log("stats for user", newUser)
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
   
  }


  const handleFirstName = (e) => {
    const userName = e.target.value;
    setFirstName(userName);
    if(userName.length < 1){
        setFNErrorMsg("first name required")
    } else if (userName.length < 2){
        setFNErrorMsg('first name must be 3 characters or longer')
    }else {
        setFNErrorMsg('');
    }
    console.log('handle first name executed')
  }

  const handleLastName = (e) => {

    setLastName(e.target.value);
    if(e.target.value.length < 1){
        setErrorMsg("last name required")
    } else if (e.target.value.length < 2){
        setErrorMsg('last name must be 3 characters or longer')
    }else {
        setErrorMsg('');
    }
    console.log('handle last name executed')

  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    if(e.target.value.length < 1){
        setEmailErrorMsg("email  required")
    } else if (e.target.value.length < 5){
        setEmailErrorMsg('email must be 5 characters or longer')
    }else {
        setEmailErrorMsg('');
    }
    console.log('handle email executed')
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    setConfirmPassword(e.target.value)
    if(password !== confirmPassword){
        setPasswordErrorMsg('password does not match')
    }else if (e.target.value.length < 8){
        setPasswordErrorMsg("email must be 8 characters in length")
    }else {
        setPasswordErrorMsg('')
    }
  }


  return (
    <div>
        <form className='form' onSubmit={createUser}>
            <div className='form-item'>
              <label htmlFor="firstName">Firstname:</label>
              <input type="text" value={firstName} placeholder="first name" onChange={handleFirstName}/>
              {
                fnErrorMsg ? <p className='p-alert'>{fnErrorMsg}</p> : '' 
              }
            </div>
            <div className='form-item'>
              <label htmlFor="lastName">lastname:</label>
              <input type="text" value={lastName} placeholder="last name" onChange={handleLastName }/> 
              {
                errorMsg ? <p className='p-alert'>{errorMsg}</p> : '' 
              }
            </div>
            <div className='form-item'>
              <label htmlFor="email">email:</label>
              <input type="text" value={email} placeholder="email" onChange={handleEmail }/> 
              {
                emailErrorMsg ? <p className='p-alert'>{emailErrorMsg}</p> : '' 
              }
            </div>
            <div className='form-item'>
              <label htmlFor="password">Password:</label>
              <input type="text" value={password} placeholder="password" onChange={handlePassword}/> 
              {
                passwordErrorMsg ? <p className='p-alert'>{passwordErrorMsg}</p> : '' 
              }
            </div>

            <div className='form-item'>
              <label htmlFor="password">Confirm Password:</label>
              <input type="text" value={confirmPassword} placeholder="password" onChange={handlePassword}/> 
              {
                passwordErrorMsg ? <p className='p-alert'>{passwordErrorMsg}</p> : '' 
              }
            </div>
            <input className="btn" type="submit" />
        </form>
    </div>
  )
}

export default Form