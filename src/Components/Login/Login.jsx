import React ,{useState} from 'react'
import "./Login.css"
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();


   const login =(e)=>{
    e.preventDefault();
    
  
    signInWithEmailAndPassword(auth,email, password)
    .then((res) => {
       axios.get(`https://amazon-clone-user-mservice.herokuapp.com/amazon/users/getByUniqueid/${res.user.uid}`)
       .then( (userdata)=> {
        localStorage.setItem("user",userdata.data.name)
        localStorage.setItem("userId",userdata.data.uniqueId)
        window.location.reload()
       
      console.log(userdata.data.name)
           }
      )
      navigate('/')
      
    })

    .catch( (e) =>{
      alert(e.message)
    }
      );
    
    }

   const goToRegister=()=>{
    navigate('/createaccount')
   }

  return (
    <div className="login">

      <div className='login__logo'>
        <img src="data:image/png;base64,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" ></img>  
         </div>

      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text"value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input  type="password" value={password} onChange={(e) =>setPassword(e.target.value)}  />
          <button type="submit" onClick={login} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login_registerButton"onClick={goToRegister}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  )




}

export default Login