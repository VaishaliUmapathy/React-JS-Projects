function Login(){
    return (
        
        <>
        <h1>Login-form</h1>
        <div className="form-container">
            <form>
                <label>Username</label>
                <input type="text" placeholder="Username" />
                <label>Password</label>
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>

        </div>
        </>
    )
}
export default Login;