import './ChangePassword.css';
import AnimationBackground from '../AnimationBackground/AnimationBackground';


function ChangePassword() {
  return (
    <div className="OverlayChangePassword">
        <AnimationBackground />
        <div className="ChangePassword">
            <h1>Change Password</h1>

            <div className="IdContainer">
                <span class="IdIcon"></span>
                <input type="text" placeholder="GDGOC ID" className="idInput"/>
            </div>
            
            <div className="OldPasswordContainer">
                <span class="PasswordIcon"></span>
                <input type="password" placeholder="Old Password" className="OldPasswordInput"/>
            </div>

            <div className="NewPasswordContainer">
                <span class="PasswordIcon"></span>
                <input type="password" placeholder="New Password" className="NewPasswordInput"/>
            </div>

            <button className="ConfirmButton">Confirm</button>
        </div>
        
    </div>

  );
}   

export default ChangePassword;