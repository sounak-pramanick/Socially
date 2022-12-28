import React from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Social Media.</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quisquam, beatae, neque cum iusto maiores nesciunt fugit a voluptatibus, iure labore exercitationem! 
                    Aperiam voluptate modi eaque porro! Autem, repudiandae! Dolorem!
                </p>
                <span>Do you have an account?</span>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
            
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Name" />
                    <button onClick={(e) => e.preventDefault()}>Register</button>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;