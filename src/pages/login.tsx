import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    setTimeout(()=>{
      
      const result =  signInWithPopup(auth, provider);
      console.log(result);
      navigate("/");
    },1200)
  };

  
  return <div> 
    <p> Sign In With Google To Continue</p>
    <button onClick={signInWithGoogle} className="loginBtn" > Sign In With Google</button>
    </div>
}