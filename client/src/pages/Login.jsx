import { useContext } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"
import newRequest from "../functions/newRequest.js"

const Login = () => {

  const [guestName , setGuestname] = useState("")
  const [password , setPassword] = useState("")
  const [error , setError] = useState("")

  const navigate = useNavigate()

  const {loading, err, dispatch} = useContext(AuthContext)

  const handleSubmit = async (e) =>{
      e.preventDefault()
      dispatch({ type: "LOGIN_START" });
      try{
          const guestname = guestName.toLowerCase()
          const res = await newRequest.post("/auth/login", {guestname, password})
          if(res.data.isSjaard){
              dispatch({type: "LOGIN_SUCCESS", payload: res.data.details})
              const isGert = true
              navigate("/admin", {state: {isSjaard}})
          }else
        {  
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
          navigate("/")
      }
          
      }catch(err){
          console.log("error log")
          setError(err.response)
      }
  }

  return (
    <form>
    <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col gap-5 w-96 p-5">
      <h1 className="text-3xl font-bold text-secondary">Welcome Back</h1>
      <hr />
      <input
        type="text"
        placeholder="Name"
        value={guestName}
        onChange={(e) => setGuestname(e.target.value)}
        />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="primary bg-primary" onClick={(e)=> {handleSubmit(e , dispatch)}}>
        Login
      </button>
      <Link to="/register" className="text-secondary underline">
        Not yet Registered ? Click Here To Signup
      </Link>
     
    </div>
    <div>
      <img
        className="h-[500px]"
        src="https://img.freepik.com/premium-photo/3d-rendering-3d-illustration-red-black-music-note-icon-isolated-white-background-song-melody-tune-symbol-concept_640106-443.jpg?w=2000"
        alt=""
        />
    </div>
  </div>
  </form>
  )
}

export default Login