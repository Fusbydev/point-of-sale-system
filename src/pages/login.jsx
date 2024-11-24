import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {

    const Navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(true);  // To handle username/password validation
    const [empty, setEmpty] = useState(true);  // To handle empty fields validation

    const usernameC = 'admin';
    const passwordC = 'password';
    

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if both username and password are empty
        if (username === '' || password === '') {
            setEmpty(false);
            setValid(true);  // Reset validation message for invalid username/password
            return;  // Don't proceed with login if fields are empty
        }

        // Check if username and password match the correct credentials
        if (username === usernameC && password === passwordC) {
            localStorage.setItem('isAuthenticated', true);  // Set authentication flag
            Navigate('/home');  // Navigate to home page on successful login
        } else {
            setValid(false);  // Show invalid credentials error
            setEmpty(true);   // Reset empty field error
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center main-login">
                <div className="container p-4 rounded-5 login-form p-4 w shadow-lg">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center mt-3">LOG IN</h2>
                            <form className="row g-3">
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
                                    <p className="text-danger anim">{valid ? '' : 'Invalid username or password'}</p>
                                    <p className="text-danger anim">{empty ? '' : 'Please input all fields'}</p>
                                </div>
                                <div className="row text-center">
                                    <p className="text-end text-primary">Forgot password?</p> {/*use `a` tag*/}
                                    <div className="col-12">
                                        <button type="submit" className="submit px-4 mt-3" onClick={handleLogin}>LOG IN</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
