import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authSlice';
import classes from './Auth.module.css';
import UserProfile from './UserProfile';

const Auth = () => {
  const[inputs,setInputs] = useState({
    email:"",
    password:""
  })
  const authState = useSelector((state)=>{
    return state.auth
  })
  const dispatch = useDispatch();

  const handlePassword = (event)=>{
    const value = event.target.value;
    setInputs(()=>{
      return {email:inputs.email,password:value}
    })
  }
  const handleEmail = (event)=>{
    const value = event.target.value;
    setInputs(()=>{
      return {email:value,password:inputs.password}
    })
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(authActions.login());
    setInputs(()=>{
      return{email:"",password:""}
    })
  }
console.log(authState)
if(!authState.auth){
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={inputs.email} onChange={handleEmail}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={inputs.password} onChange={handlePassword}/>
          </div>
          <button onClick={handleSubmit}>Login</button>
        </form>
      </section>
    </main>
  );
}
else{
  return(
    <div>
      <UserProfile/>
    </div>
  )
}
};

export default Auth;
