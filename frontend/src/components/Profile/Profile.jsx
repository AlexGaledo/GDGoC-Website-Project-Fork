import './Profile.css';
import React, { useState, useContext} from 'react';
import Camera from './Profile-assets/camera.svg';
import { useUser } from '../../context/UserContext';
import AnimationBackground from '../AnimationBackground/AnimationBackground';


function Profile({ onClose , onSignOut}){
    const [showLogin, setShowLogin] = useState(false);
    const [exiting, setExiting] = useState(false);


    const { firstName, 
            lastName, 
            username, 
            gdgID, 
            expNumber, 
            idPad, 
            profilePic, 
            setProfilePic } = useUser();

    const handleExit = () => {
        setExiting(true); 
    };  

    const handleSignOut = () => {
        setExiting(true);
        // Call parent's sign-out handler after animation
        setTimeout(() => {
            onSignOut();
        }, 300); // Match animation duration
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result); // base64 string
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <div  
            className={`profile-modal-wrapper ${exiting ? "profile-exit" : ""}`}
            onAnimationEnd={() => {
                if (exiting) onClose(); 
            }}
        >
            <div className="profile-container" onClick={(e) => e.stopPropagation()}>
                <AnimationBackground />
                
                <button className='ph--triangle-fill' onClick={handleExit}></button>

                <div className='logOut profile' onClick={handleSignOut} role='button'>
                    <span className="logoutText"></span> 
                    <span className="logoutIcon"></span>
                </div>

                <div className="name">
                    <h4>
                        {firstName}, {lastName}
                    </h4>
                </div>
                <div className="inner-container">
                    <div 
                        className={`profilePic ${profilePic ? "hasImage" : "defaultBg"}`}
                        style={ profilePic ? { backgroundImage:`url(${profilePic})`}: undefined }                      
                    >
                        <label htmlFor="profile-upload">
                            <img src={Camera} alt="Profile" className="camera" />
                        </label>
                        <input
                            id="profile-upload"
                            type="file"
                            accept="image/png, image/jpeg"
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="user-name-id">
                        <p className='username'>{username}</p>
                        <p className='gdgID'>{idPad}{gdgID}</p>
                    </div>
                </div>
                <div className="exp-box">
                        <p className='exp-num'>{expNumber}</p>
                        <p className='xp'>XP</p>
                </div>
            </div>
        </div>
    );
}

export default Profile