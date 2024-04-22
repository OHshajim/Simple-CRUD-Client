import { useLoaderData } from "react-router-dom";

const Update = () => {
    const userData = useLoaderData()
    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updateUser = {name,email}
        console.log(name, email);

        fetch(`http://localhost:5000/users/${userData._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateUser)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    alert("Successfully updated")
                }
            })
    }
    return (
        <div>
            <h2>Update information of {userData.name} </h2>
            <form onSubmit={handleUpdate}>
                <label>Name</label> <br />
                <input type="text" name='name' defaultValue={userData.name} /> <br />
                <label>Email</label> <br />
                <input type="email" name='email' defaultValue={userData.email} /> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;