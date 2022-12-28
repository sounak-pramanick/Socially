import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello, User.</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quisquam, beatae, neque cum iusto maiores nesciunt fugit a voluptatibus, iure labore exercitationem! 
                    Aperiam voluptate modi eaque porro! Autem, repudiandae! Dolorem!
                </p>
                <span>Don't have an account?</span>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
            
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button onClick={(e) => e.preventDefault()}>Login</button>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;