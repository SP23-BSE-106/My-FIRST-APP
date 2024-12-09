function Admin({ userRole }) {
    return (
      <div>
        {userRole === "admin" ? <h1>Admin Panel</h1> : <h1>User Dashboard</h1>}
      </div>
    );
  }
  export default Admin;