import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initState = {
    credentials: {
        username: '',
        password: ''
      }
}

const Login = () => {
    const [state, setState] = useState(initState)

    const history = useHistory();

    const handleChange = evt => {
        setState({
          credentials: {
            ...state.credentials,
            [evt.target.name]: evt.target.value
          }
        });
      };

    const login = evt => {
        evt.preventDefault();
        axios.post('http://localhost:9000/api/login', state.credentials)
        .then(res => {
            const { token } = res.data
            localStorage.setItem('token', token)
            setState(initState)
            history.push('/friends')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="frame">
            <section className="login-page">
                <div className="login">
                    <h1>LOGIN</h1>
                </div>
                <div className="form-div">
                <form onSubmit={login}>
                    <label>USERNAME</label>
                    <input
                        type="text"
                        name="username"
                        value={state.credentials.username}
                        onChange={handleChange}
                    />
                    <label>PASSWORD</label>
                    <input
                        type="password"
                        name="password"
                        value={state.credentials.password}
                        onChange={handleChange}
                    />
                    <button>SUBMIT</button>
                </form>
                </div>
            </section>
        </div>
    )
}

export default Login