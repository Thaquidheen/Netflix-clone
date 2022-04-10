import { useContext } from 'react';
import { useState } from 'react';
import { login } from '../../context/authContext/apiCall';
import { AuthContext } from '../../context/authContext/authContext';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    };
    return (

        <>

            <div className='login'>



                <form className="loginForm">
                    <div className="title">
                        <span className='loginTitle'>NETFLIX-ADMIN-PANEL</span>
                    </div>
                    <input type="text" placeholder='email' className="loginInput" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='password' className="passwordInput" onChange={(e) => setPassword(e.target.value)} />
                    <button className="loginButton" onClick={handleLogin} disabled={isFetching} >Login</button>

                </form>
            </div>
        </>
    );
}

export default Login;
