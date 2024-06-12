import './login.css'
const Login: React.FC = () => {
   return (
    <div className='body'>
    <div className="login-container">
        <form className="login-form">
            <h1 className='title-login'>Gondor Chic</h1>
            <div className="form-group">
                <label className="username">Pseudo</label>
                <input type="text" id="username" name="username"/>
            </div>
            <div className="form-group">
                <label className="password">Mot de passe</label>
                <input type="password" id="password" name="password"/>
            </div>
            <button type="submit" className="login-button">Se connecter</button>
            <div className='line-blue'></div>
        </form>
    </div>
    </div>
   )
}
export default Login;