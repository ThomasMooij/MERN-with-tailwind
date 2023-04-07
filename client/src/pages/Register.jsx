import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import newRequest from '../functions/newRequest.js'
const Register = () => {
  const [user, setUser] = useState({
    guestname: "",
    email: "",
    password: "",
    password1: "",
  });
  // error variables
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password1Error, setPassword1Error] = useState(false);
  const [correctError, setCorrectError] = useState(false);

  const navigate = useNavigate();


  const handleClick = async (e) => {
  
    const guestname = user?.guestname.toLowerCase();
   
    if (!user.guestname) {
     
      setNameError(!nameError);
    } else if (!user.email) {
      setEmailError(!emailError);
    } else if (!user.password) {
      setPasswordError(!passwordError);
    } else if (!user.password1) {
      setPassword1Error(!password1Error);
    } else if (user.password !== user.password1) {
      setCorrectError(!correctError);
    } else {
      try {
        await newRequest.post("/auth/register", {
          guestname,
          email: user.email,
          password: user.password,
        });
        alert("Succesvol geregistreerd!");
        navigate("/player");
      } catch (err) {
        console.log(err);
      }
    }
  };
  console.log(user)
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 w-96 shadow p-5 border-gray-500">
        <h1 className="text-3xl font-bold text-gray-700">meld je aan</h1>
        {nameError ? <span>Wel de naam invullen </span> : null}
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({...user, guestname:e.target.value})}
        />
        {emailError ? <span>Wel de email invullen </span> : null}
        <input
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({...user, email:e.target.value})}
        />
         {passwordError ? <span>Wel het wachtwoord invullen </span> : null}
        {correctError ? <span>De wachtwoorden komen niet overeen </span> : null}
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({...user, password:e.target.value})}
        />
            {password1Error ? <span>Wel het wachtwoord bevestigen </span> : null}
          {correctError ? <span>De wachtwoorden komen niet overeen </span> : null}
        <input
          type="password"
          placeholder="Confirm password"
          value={user.password1}
          onChange={(e) => setUser({...user, password1:e.target.value})}
        />
        <button className="primary" onClick={handleClick}>
          register
        </button>
      </div>
    </div>
  );
};

export default Register;
