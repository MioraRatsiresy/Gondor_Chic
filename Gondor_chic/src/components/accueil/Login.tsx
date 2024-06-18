import './login.css';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // Vous pouvez ajouter votre logique d'authentification ici
        navigate('/home');
    };
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
            <button onClick={handleLogin} className="login-button">Se connecter</button>
            <div className='line-blue'></div>
        </form>
    </div>
    </div>
   )
}
export default Login;