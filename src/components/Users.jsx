import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const userData = useLoaderData()
    const [users, setUser] = useState(userData)


    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remaining = userData.filter(user => user._id !== _id)
                    setUser(remaining)
                }
            })
    }
    return (
        <div>
            <h2> Users : {users.length}</h2>
            {
                users.map(user => <h3 key={user._id} >{user._id} :  {user.name} : {user.email} : 
                  : <Link to={`/update/${user._id}`}><button>Update</button></Link> :
                  : <button onClick={() => handleDelete(user._id)}>x</button></h3>)
            }
            <Link to='/'><button>Back to home</button></Link>
        </div>
    );
};

export default Users;