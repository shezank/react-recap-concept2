import './friend.css'
export default function Friend({ friend }) {

    const { name, email } = friend;
    
   

    return (
        <div className="boxs" >
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
        </div>
    )
}