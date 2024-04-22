import './App.css'

function App() {
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

  }

  return (
    <>
      <h1>Simple CRUD Client</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label> <br />
        <input type="text" name='name' placeholder='Enter your name' /> <br />
        <label>Email</label> <br />
        <input type="email" name='email' placeholder='Enter your email' /> <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App;
