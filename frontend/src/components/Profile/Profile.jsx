import './Profile.css';
import Camera from './Profile-assets/camera.svg';

function Profile(){
    const firstName = 'Irwen';
    const lastName = 'Fronda';
    const username = 'wen';
    const gdgID = 1448;
    const expNumber = 0;
    const idPad = 'GDGTUP-25-';

    return(
        <>
            <div className="profile-container">
                <div className="profile-bg-clip">
                    <div className="profile-bg-abstract"></div>
                </div>
                <button className='ph--triangle-fill'></button>
                <div className="name">
                    <h4>
                        {firstName}, {lastName}
                    </h4>
                </div>
                <div className="inner-container">
                    <div className="profilePic">
                        <img src={Camera} className='camera'/>
                    </div>
                    <div className="user-name-id">
                        <p className='username'>@{username}</p>
                        <p className='gdgID'>{idPad}{gdgID}</p>
                    </div>
                </div>
                <div className="exp-box">
                        <p className='exp-num'>{expNumber}</p>
                        <p className='xp'>XP</p>
                </div>
                
            </div>
        </>
        
    );
}

export default Profile