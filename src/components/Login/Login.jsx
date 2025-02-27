import { useState,useContext } from "react"
import { UserContext } from "../../context/UserContext"

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword]= useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit  = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        placeholder="username"
        onChange={(e)=> setUsername && setUsername(e.target.value)}
        />
        {' '}
        <input type="password" 
        value={password}
        placeholder="password"
        onChange={(e)=> setPassword && setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Click</button>
    </div>
  )
}

export default Login