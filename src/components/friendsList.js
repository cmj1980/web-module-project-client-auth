import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="friends-frame">
            <h1 className="friends-title">FRIENDS LIST</h1>
            <section className="friends-list">
            {friends.map(fr => (
                <div key={fr.id}>- {fr.name} - {fr.email}</div>
            ))}
            </section>
        </div>
    )
}

export default FriendsList