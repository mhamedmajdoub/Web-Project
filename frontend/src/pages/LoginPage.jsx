import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../components/service/UserService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = await UserService.login(email, password);
            console.log(userData);
            if (userData.token) {
                localStorage.setItem('token', userData.token);
                navigate('/home');
            } else {
                setError(userData.message);
            }
        } catch (error) {
            console.log(error);
            setError(error.message);
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <span className="icon-container email-icon"></span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div className="form-group" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <span className="icon-container lock-icon"></span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <div className="button-container">
                    <button type="submit" className="button-login">Login</button>
                    <button type="button" onClick={() => navigate('/register')} className="button-register">Register</button>
                </div>
                <div className="social-icons">
                    <a href="https://www.google.com" className="icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                    <a href="https://github.com/mhamedmajdoub" className="icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/mhamed-majdoub/" className="icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
