import { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({
    username: '',
    gender: '',
    isAdmin: false,
  });

  function handleChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const key = event.target.name;

    setUser({
      ...user,
      [key]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('user', user);
  }

  return (
    <form className="UserForm" onSubmit={handleSubmit}>
      <div>
        Username : <input type="text" name="username" onChange={handleChange} value={user.username} />
      </div>
      <div>
        Gender : <select onChange={handleChange} name="gender" value={user.gender} >
          <option></option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        Admin : <input type="checkbox" name="isAdmin" onChange={handleChange} checked={user.isAdmin} />
      </div>
      <div>
        User : {JSON.stringify(user)}
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default UserForm;