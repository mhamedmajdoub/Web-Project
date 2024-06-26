import React, { useState } from 'react';
import UserService from '../components/service/UserService';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function RegisterPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await UserService.register(formData);
            console.log('User registered successfully');
            // Clear the form fields after successful registration
            alert('User registered successfully');
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            });
            navigate('/login');

        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred while registering user');
        }
    };

    return (
        <div className="auth-container">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your first name"
                        className="register-input"
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your last name"
                        className="register-input"
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                        className="register-input"
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter a strong password"
                        className="register-input"
                    />
                </div>
                
                <div className="button-container">
                    <button type="submit" className="button-login">Register</button>
                    <button type="button" onClick={() => navigate('/login')} className="button-register">Login</button>
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

export default RegisterPage;
