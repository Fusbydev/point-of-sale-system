import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';


function Register() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center main-login mx-2">
                <div className="container p-4 rounded-5 login-form p-4 w shadow-lg">
                    <h2 className="text-center">REGISTER</h2>
                    <form action="">
                        <div className="row">
                            <div className="col-12">
                                <input type="email" className='form-control my-2 shadow-inner rounded-5 p-3' placeholder='Email' />
                            </div>
                            <div className="col-12">
                                <input type="text" className='form-control my-2 shadow-inner rounded-5 p-3' placeholder='Username' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-12 col-sm-12 d-flex gap-2">
                                <input type="password" className='form-control my-2 shadow-inner rounded-5 p-3' name="password" id="" placeholder='Enter Password' />
                                <input type="password" className='form-control my-2 shadow-inner rounded-5 p-3' name="confirm-password" id="" placeholder='Confirm Password' />
                            </div>
                        </div>
                        <div className="row">
                        <p className='text-center my-2'>Already have an account? <a href="/">login</a></p>
                            <div className="col-12 d-flex justify-content-center my-2">
                                <button className='submit'>REGISTER</button>
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