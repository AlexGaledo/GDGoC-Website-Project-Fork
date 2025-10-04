import './LogIn.css';
import AnimationBackground from '../AnimationBackground/AnimationBackground';


function LogIn() {
    return (
        <div className="OverlayLogIn">
            <AnimationBackground />
            <div className="LogIn">
                <h1>Log in</h1>
                <p className="greet">Hello, welcome back to your account</p>

                <div className="IdContainer">
                    <span class="IdIcon"></span>
                    <input type="text" placeholder="GDGOC ID" className="idInput"/>
                </div>
                
                <div className="passwordContainer">
                    <span class="PasswordIcon"></span>
                    <input type="password" placeholder="Password" className="passwordInput"/>
                </div>

                <button className="logInButton">Log in</button>
            </div>
            
        </div>
    );
}

export default LogIn;