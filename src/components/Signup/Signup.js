import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './Signup.css'
const Signup = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext)
    const handlesubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if (password < 6) {
            setError("Password must be atleat 6 digit");
            return;
        }

        if (password !== confirm) {
            setError("Your password did not match");
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'> SignUp</h2>
            <form onSubmit={handlesubmit} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='enter your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='enter your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='enter your password' required />
                </div>
                <input className='btn-submit' type="submit" value="SignUp" />
                <p>Already have an account? <Link to='/login'><span className=''>Login</span></Link></p>
                <p className='text-error'>{error}</p>

            </form>
        </div>
    );
};

export default Signup;