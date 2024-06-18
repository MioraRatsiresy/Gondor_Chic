import './login.css';
import logo from './../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        navigate('/home');
    };
   return (
    <div className='body'>
    <div className="login-container">
        <form className="login-form">
            <img src={logo} alt="Gondor Chic Logo" className="site-logo"/>
            <div className="form-group">
                <label className="username">Pseudo</label>
                <input type="text" id="username" name="username"/>
            </div>
            <div className="form-group">
                <label className="password">Mot de passe</label>
                <input type="password" id="password" name="password"/>
            </div>
            <button onClick={handleLogin} className="login-button">Se connecter</button>
            <div className='line-blue'></div>
        </form>
    </div>
    </div>
   )
}
export default Login;