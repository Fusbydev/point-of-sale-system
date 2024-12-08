import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import the auth service from firebase.js
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'; // Import necessary Firebase functions
import './login.css';

function Login() {
    const Navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(true);
    const [empty, setEmpty] = useState(true);
    const [loading, setLoading] = useState(true);

    const usernameC = localStorage.getItem('username');
    const passwordC = localStorage.getItem('password');

    useEffect(() => {
        // Check if the user is already authenticated
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // If a user is logged in with Google, redirect to home page
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('user', JSON.stringify(user));
                Navigate('/home');
            } else {
                setLoading(false); // Set loading to false once the auth state is checked
            }
        });

        return () => unsubscribe();
    }, [Navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === '' || password === '') {
            setEmpty(false);
            setValid(true);
            return;
        }

        if (username === usernameC && password === passwordC) {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userFromForm', JSON.stringify({ username: username }));
            Navigate('/home');
        } else {
            setValid(false);
            setEmpty(true);
        }
    };

    // Google Sign-In
    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isAuthenticated', 'true');

            // Navigate to the homepage
            Navigate('/home');
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return<div className="Parent-loading">

        <div className="loding-animation-holder">
            <div className="loading-animator"></div>
            <div className="loading-animator"></div>
            <div className="loading-animator"></div>
            <div className="loading-animator"></div>
            <div className  ="middle-circle"></div>
        </div>
    </div>; // Show loading indicator while checking auth state
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center main-login mx-2">
                <div className="container p-4 rounded-5 login-form p-4 w shadow-lg">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center mt-3">LOG IN</h2>
                            <form className="row">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className={valid && empty ? 'form-control shadow-inner rounded-5 p-3' : 'form-control shadow-inner rounded-5 p-3 border-danger'}
                                        id="exampleInputEmail1"
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className={valid && empty ? 'form-control shadow-inner rounded-5 p-3' : 'form-control shadow-inner rounded-5 p-3 border-danger'}
                                        id="exampleInputPassword1"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <p className='text-center mt-2'>Don't have an account? <a href="/register">Register</a></p>
                                    <input type="checkbox" name="remember" id="remember" />
                                    <label htmlFor="remember" className="ms-2">Remember me</label>
                                    <p className="text-danger anim">
                                        {valid ? '' : <>Invalid username or password! <i className="bi bi-exclamation-circle-fill"></i></>}
                                    </p>
                                    <p className="text-danger anim">
                                        {empty ? '' : <>Please enter your username and password! <i className="bi bi-exclamation-circle-fill"></i></>}
                                    </p>
                                </div>
                                <div className="row text-center">
                                    <p className="text-end text-primary">Forgot password?</p>
                                    <div className="col-12">
                                        <button type="submit" className="submit px-4 mt-1" onClick={handleLogin}>LOG IN</button>
                                    </div>
                                </div>
                            </form>
                            {/* Google Login Button */}
                            <div className="google-login mt-3">
                                <button className="google-btn d-flex justify-content-center align-items-center" onClick={handleGoogleLogin}>
                                    <i className="bi bi-google"></i>
                                    <span className="ms-2">Login with Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <p className='text-white dev'>DEVELOPED BY AIKAWA</p>
                <div className="col-12">
                    <p className="text-center">Copyright © 2024. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Login;
