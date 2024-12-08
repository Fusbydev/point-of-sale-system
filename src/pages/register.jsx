import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import the auth service from firebase.js
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Import the necessary Firebase functions
import './login.css';

function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [valid, setValid] = useState(true);

    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider(); // Correct way to use GoogleAuthProvider
            const result = await signInWithPopup(auth, provider); // Use signInWithPopup
            const user = result.user;
            setMessage(`Welcome, ${user.displayName}!`);
            localStorage.setItem('user', JSON.stringify(user));
            setShowSuccessMessage(true);
            navigate('/home'); // Redirect after successful sign-in
        } catch (error) {
            setMessage('Error during Google sign-in. Please try again.');
            setShowSuccessMessage(true);
        }
    };

    function handleRegister(e) {
        e.preventDefault();
        if (password === confirmPassword) {
            localStorage.setItem('email', email);
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            navigate('/');

        } else {
            setValid(false);
        }
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center main-login mx-2">
                <div className="container p-4 rounded-5 login-form shadow-lg">
                    <h2 className="text-center">REGISTER</h2>
                    <form onSubmit={handleRegister}>
                        <div className="row">
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control mb-2 shadow-inner rounded-5 p-3"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control mb-2 shadow-inner rounded-5 p-3"
                                    placeholder="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className={`form-control mb-2 shadow-inner rounded-5 p-3 ${valid ? '' : 'border-danger'}`}
                                    placeholder="Enter Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className={`form-control mb-2 shadow-inner rounded-5 p-3 ${valid ? '' : 'border-danger'}`}
                                    placeholder="Confirm Password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        {!valid && <p className="text-danger text-center">Passwords do not match!</p>}
                        
                        <div className="row">
                            <div className="col-12 text-center">
                                <p>Sign Up Using</p>
                                <div className="d-flex justify-content-center auth-fire">
                                    <button type="button" onClick={handleGoogleSignIn} className="btn">
                                        <i className="bi bi-google mx-2"></i> Sign Up with Google
                                    </button>
                                </div>
                            </div>
                        </div>

                        {showSuccessMessage && (
                            <div className="container-fluid email-message d-flex align-items-center">
                                <div className="row w-100 mb-0">
                                    <div className="col-8 d-flex align-items-center">
                                        {message && <p className="email-sent">{message}</p>}
                                    </div>
                                    <div className="col-4 d-flex justify-content-end align-items-center">
                                        <button
                                            className="btn p-0"
                                            onClick={() => setShowSuccessMessage(false)}>
                                            <i className="bi bi-x"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="row">
                            <p className="text-center mb-2">
                                Already have an account? <a href="/">Login</a>
                            </p>
                            <div className="col-12 d-flex justify-content-center mb-2">
                                <button type="submit" className="submit">
                                    REGISTER
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <p className="text-white dev">DEVELOPED BY AIKAWA</p>
                <div className="col-12">
                    <p className="text-center">Copyright © 2024. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Register;
