import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './Login.css'
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const from = location?.state?.from.pathName || "/"

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'> Login</h2>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='enter your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='enter your password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p>New to ema jhon? <Link to='/signup'><span className=''>Create a new accout</span></Link></p>

            </form>
        </div>
    );
};

export default Login;