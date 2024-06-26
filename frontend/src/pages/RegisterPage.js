import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const { firstName, lastName, email, password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // await axios.post("http://localhost:8080/api/users/create", user);
        navigate("/login");
    };

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={(e) => onSubmit(e)}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" name="firstName" value={firstName} onChange={(e) => onInputChange(e)} required />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" name="lastName" value={lastName} onChange={(e) => onInputChange(e)} required />
                </p>
                <p>
                    <label>Email Address</label><br />
                    <input type="email" name="email" value={email} onChange={(e) => onInputChange(e)} required />
                </p>
                <p>
                    <label>Password</label><br />
                    <input type="password" name="password" value={password} onChange={(e) => onInputChange(e)} required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree to all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a>.</span>
                </p>
                <button id="sub_btn" type="submit">Register</button>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    );
}
