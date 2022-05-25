import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initState = {
    friendDetails: {
        name: '',
        age: '',
        email: ''
      }
}

const AddFriends = () => {
    const [state, setState] = useState(initState)

    const history = useHistory();

    const handleChange = evt => {
        setState({
          friendDetails: {
            ...state.friendDetails,
            [evt.target.name]: evt.target.value
          }
        });
      };

    const addFriend = evt => {
        evt.preventDefault();
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', state.friendDetails, {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            setState(initState)
            history.push('/friends')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="frame">
            
            <section className="login-page">
                <div className="login">
                <h1>ADD FRIEND</h1>
                </div>
                <div className="form-div">
                <form onSubmit={addFriend}>
                    <label>NAME</label>
                    <input
                        type="text"
                        name="name"
                        value={state.friendDetails.name}
                        onChange={handleChange}
                    />
                    <label>AGE</label>
                    <input
                        type="number"
                        name="age"
                        value={state.friendDetails.age}
                        onChange={handleChange}
                    />
                     <label>EMAIL</label>
                    <input
                        type="email"
                        name="email"
                        value={state.friendDetails.email}
                        onChange={handleChange}
                    />
                    <button>SUBMIT</button>
                </form>
                </div>
            </section>
        </div>
    )
}

export default AddFriends