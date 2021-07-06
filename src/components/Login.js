import ramoImg from '../../assets/img/ramo-logo.png'

const Login = (props)=> {

    
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSingup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;
        
    
    return(
        
        <div id="login">
            <section className = "Login" >
                <div className="loginContainer">
                    <div className="logo">
                        <img src={ramoImg} alt="" />
                    </div>
                    <label>Username</label>
                    <input 
                        type="text"  
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>
                    <label>Password</label>
                    <input 
                        type="password"
                        requiered
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                                <button onClick={handleLogin}>Sign in</button>
                                <p>
                                    Don't have an account ? 
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                                </p>
                            </>
                        )   :   (
                            <>
                                <button onClick={handleSingup}>Sign up</button>
                                <p>
                                    Have an account? 
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                                </p>
                            </>  
                        )}
                    </div>
                </div>
            </section>
        </div>   
    
    );
    
}



export default Login;