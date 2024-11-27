import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';


function Register() {

    const Navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [valid, setValid] = useState(true);

    function handleRegister(e) {
        e.preventDefault();
        if (password === confirmPassword) {
            localStorage.setItem('email', email);
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            Navigate('/');

        } else {
            setValid(false);
        }

    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center main-login mx-2">
                <div className="container p-4 rounded-5 login-form p-4 w shadow-lg">
                    <h2 className="text-center">REGISTER</h2>
                    <form action="">
                        <div className="row">
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className='form-control mb-2 shadow-inner rounded-5 p-3' placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="username" className="form-label"> Username</label>
                                <input type="text" className='form-control mb-2 shadow-inner rounded-5 p-3' placeholder='Username'
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-6 col-lg-6 col-sm-6 gap-2">
                                <label htmlFor="password"className="form-label">Password</label>
                                <input type="password" className={valid? 'form-control mb-2 shadow-inner rounded-5 p-3': 'form-control shadow-inner rounded-5 p-3 border-danger'} name="password" id="" placeholder='Enter Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <p className='text-danger'>{valid? '': 'Password do not match'}</p>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6">
                                <label htmlFor="password" className="form-label">Confirm Password</label>
                                <input type="password" className={valid? 'form-control mb-2 shadow-inner rounded-5 p-3': 'form-control shadow-inner rounded-5 p-3 border-danger'} name="password" id="" placeholder='Confirm Password'
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                
                            </div>
                        </div>
                        <div className="row">
                            <p className='text-center mb-2'>Already have an account? <a href="/">login</a></p>
                            <div className="col-12 d-flex justify-content-center mb-2">
                                <button className='submit' onClick={handleRegister}>REGISTER</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <p className='text-white dev'>DEVELOPED BY AIKAWA</p>
                <div className="col-12">
                    <p className="text-center">Copyright © 2024. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Register;