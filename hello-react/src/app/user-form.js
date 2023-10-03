function UserForm() {
  return (
    <form className="UserForm">
      <div>
        Username : <input type="text" />
      </div>
      <div>
        Gender : <select>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        Admin : <input type="checkbox" />
      </div>
    </form>
  )
}

export default UserForm;