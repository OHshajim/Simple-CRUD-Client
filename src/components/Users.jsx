import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2> Users : {users.length}</h2>
            {
                users.map(user=><h3 key={user._id} >{user.name} : {user.email}</h3>)
            }
            <Link to='/'><button>Back to home</button></Link>
        </div>
    );
};

export default Users;