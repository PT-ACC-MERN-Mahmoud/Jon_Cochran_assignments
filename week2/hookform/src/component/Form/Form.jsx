import React, {useState} from 'react'
import './Form.scss'

const Form = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [psw, setPsw] = useState('');

  const createUser = (e) => {
    e.preventDefault();

    const newUser = {firstName, lastName, email, psw};
    console.log("stats for user", newUser)
  }




  return (
    <div>
        <form className='form' onSubmit={createUser}>
            <div className='form-item'>
              <label htmlFor="firstName">Firstname:</label>
              <input type="text" value={firstName} placeholder="first name" onChange={(e)=>setFirstName(e.target.value)  }/>
            </div>
            <div className='form-item'>
              <label htmlFor="firstName">lastname:</label>
              <input type="text" value={lastName} placeholder="last name" onChange={(e)=>setLastName(e.target.value)  }/> 
            </div>
            <div className='form-item'>
              <label htmlFor="email">email:</label>
              <input type="text" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)  }/> 
            </div>
            <div className='form-item'>
              <label htmlFor="password">Password:</label>
              <input type="text" value={psw} placeholder="password" onChange={(e)=>setPsw(e.target.value)  }/> 
            </div>

            <div className='form-item'>
              <label htmlFor="password">Confirm Password:</label>
              <input type="text" value={psw} placeholder="password" /> 
            </div>
            <input className="btn" type="text" value="submit" />
        </form>
        <div className="userInfo">
            <h2>{firstName} {lastName}</h2>
            <p>{email}</p>
            <p>{psw}</p>
        </div>
    </div>
  )
}

export default Form