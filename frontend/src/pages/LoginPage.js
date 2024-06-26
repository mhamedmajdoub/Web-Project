import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../components/service/UserService";
import { Link } from "react-router-dom";


function LoginPage(){
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const userData = await UserService.login(email, password)
        console.log(userData)
        if (userData.token) {
            localStorage.setItem('token', userData.token)
            navigate('/home')
        }else{
            setError(userData.message)
        }
        
    } catch (error) {
        console.log(error)
        setError(error.message)
        setTimeout(()=>{
            setError('');
        }, 5000);
    }
}

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Email address</label><br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </p>
                <button id="sub_btn" type="submit">Login</button>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
    );
}


export default LoginPage;