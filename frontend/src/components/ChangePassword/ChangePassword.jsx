import './ChangePassword.css';
import AnimationBackground from '../AnimationBackground/AnimationBackground';
import React, { useState } from 'react';
import backend from '../../api/axios';
import { useNavigate } from 'react-router-dom';


function ChangePassword({ onClose, isClosing }) {
    const navigate = useNavigate()
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [gdgocid, setGgdocid]= useState('')
    const [exiting, setExiting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleExit = () => {
        setExiting(true); 
    }



    const change_password = async (e) => {
        e.preventDefault();

        if (isLoading) return;
        
        setIsLoading(true);

        try {
            const res = await backend.post('auth/change-password',{
                googler_id: gdgocid,
                old_password: oldPassword,
                new_password: newPassword}
            )
            alert(res.data.response);
            handleExit();
            
        } catch (error) {
            console.error('Change Password error:', error);
            const msg = error?.response?.data?.error || 'Change Password failed. Please try again.';
            window.alert(msg);
        }finally{
            setGgdocid('')
            setOldPassword('')
            setNewPassword('')
        }
    }
    return (
        <>
            <div 
                className={`ChangePassword-modal-wrapper ${exiting || isClosing ? "CP-exit" : ""}`}
                onAnimationEnd={() => {
                    if (exiting) onClose(); 
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="OverlayChangePassword">
                    <AnimationBackground />
                    <div className="ChangePassword">
                        <h1>Change Password</h1>

                        <div className="IdContainer">
                            <span className="IdIcon"></span>
                            <input type="text" placeholder="GDGOC ID" className="idInput"
                            value={gdgocid} onChange={(e)=>{setGgdocid(e.target.value)}}/> 
                            {/* I removed equired */}
                        </div>
                        
                        <div className="OldPasswordContainer">
                            <span className="PasswordIcon"></span>
                            <input type="password" placeholder="Old Password" className="OldPasswordInput"
                            value={oldPassword} onChange={(e)=>{setOldPassword(e.target.value)}}required/>
                        </div>

                        <div className="NewPasswordContainer">
                            <span className="PasswordIcon"></span>
                            <input type="password" placeholder="New Password" className="NewPasswordInput"
                            value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}}required/>
                        </div>

                        <button className="ConfirmButton" onClick={change_password} disabled={isLoading}>Confirm</button>
                    </div>
                    
                </div>
            </div>
        </>
    );
}   

export default ChangePassword;