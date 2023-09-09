import { useEffect, useState } from "react"
import Friend from "./Frined"


export default function Friends(){
    const [friends, setFriends] = useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, []);



    return (

        <div >
            <h3> Total Friends: {friends.length} </h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
            
        </div>
    )
}