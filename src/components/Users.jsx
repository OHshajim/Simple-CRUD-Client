import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData()
    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount>0){
                    alert('deleted successfully')
                }
            })
    }
    return (
        <div>
            <h2> Users : {users.length}</h2>
            {
                users.map(user => <h3 key={user._id} >{user._id} :  {user.name} : {user.email}  <button onClick={() => handleDelete(user._id)}>x</button></h3>)
            }
            <Link to='/'><button>Back to home</button></Link>
        </div>
    );
};

export default Users;