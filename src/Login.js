function Login(props){
    return (
        <div>
        {props.isLoggedIn ? (
          <div>
            <h2>Welcome, {props.name}!</h2>
          </div>
        ) : (
          <div>
            <p>Please log in to continue.</p>
            <button onClick={props.onLogin}>Log In</button>
          </div>
        )}
      </div>
      );
}
export default Login;