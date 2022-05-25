import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const NavBar = () => {

    const history = useHistory()

    const logout = () => {
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/logout', {}, {
            headers: {
                authorization: token
            }
        })
        .then(res => {
          localStorage.removeItem('token')
          history.push('/login')
        })
        .catch(err => console.log(err))
      }

    return (
        <section className="nav-section">
            <div><h2>Client Auth Project</h2></div>
            <nav className="main-nav">
                <Link to="/login">LOGIN</Link>
                <Link to="/friends">FRIENDLIST</Link>
                <Link to="/friends/add">ADDFRIEND</Link>
                <Link onClick={logout}>LOGOUT</Link>
            </nav>
        </section>
    )

}

export default NavBar