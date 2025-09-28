import styles from './Navbar.module.css';
import logo from '../../assets/images/GDGOC logo.svg';
import hamburgerBar from '../../assets/images/Hamburger-bar.svg';
import Profile from '../Profile/Profile';
import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';


function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { profilePic } = useUser();


  const handleClose = () => {
    setIsClosing(true); // trigger exit animation
    setTimeout(() => {
      setShowProfile(false); // unmount AFTER animation
      setIsClosing(false);   // reset
    }, 300); 
  };

  
  
  return (
    <>
      {/* Navigation Bar */}
      <div className="container-fluid px-xl-5">
        <div className={`${styles.navBar} d-flex align-items-center justify-content-between`}>
          <img className={styles.logo} src={logo} alt="GDGC logo" />
          <button className={`${styles.hamburgerBar} d-xl-none`} type="button" data-bs-toggle="offcanvas" data-bs-target="#sideBar">
            <img src={hamburgerBar} alt="button"/>
          </button>
          <div className='d-none d-xl-flex align-items-center gap-5'>
            <a href="#" className={styles.home}>Home</a>
            <a href="#" className={styles.events}>Events
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.6667 8.08333V13.3333C11.6667 13.6428 11.5437 13.9395 11.325 14.1583C11.1062 14.3771 10.8094 14.5 10.5 14.5H1.16667C0.857247 14.5 0.560501 14.3771 0.341709 14.1583C0.122916 13.9395 0 13.6428 0 13.3333V4C0 3.69058 0.122916 3.39383 0.341709 3.17504C0.560501 2.95625 0.857247 2.83333 1.16667 2.83333H6.41667C6.57138 2.83333 6.71975 2.89479 6.82915 3.00419C6.93854 3.11358 7 3.26196 7 3.41667C7 3.57138 6.93854 3.71975 6.82915 3.82915C6.71975 3.93854 6.57138 4 6.41667 4H1.16667V13.3333H10.5V8.08333C10.5 7.92862 10.5615 7.78025 10.6709 7.67085C10.7802 7.56146 10.9286 7.5 11.0833 7.5C11.238 7.5 11.3864 7.56146 11.4958 7.67085C11.6052 7.78025 11.6667 7.92862 11.6667 8.08333ZM14 1.08333C14 0.928624 13.9385 0.780251 13.8291 0.670855C13.7197 0.561458 13.5714 0.5 13.4167 0.5H8.75C8.63456 0.499909 8.52169 0.534072 8.42568 0.598163C8.32966 0.662255 8.25483 0.753392 8.21064 0.860039C8.16645 0.966686 8.15489 1.08405 8.17744 1.19726C8.19999 1.31048 8.25562 1.41446 8.33729 1.49604L10.2586 3.41667L7.17062 6.50396C7.06117 6.61341 6.99968 6.76187 6.99968 6.91667C6.99968 7.07146 7.06117 7.21992 7.17062 7.32938C7.28008 7.43883 7.42854 7.50032 7.58333 7.50032C7.73813 7.50032 7.88658 7.43883 7.99604 7.32938L11.0833 4.24135L13.004 6.16271C13.0855 6.24438 13.1895 6.30001 13.3027 6.32256C13.416 6.3451 13.5333 6.33355 13.64 6.28936C13.7466 6.24517 13.8377 6.17034 13.9018 6.07432C13.9659 5.97831 14.0001 5.86544 14 5.75V1.08333Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#" className={styles.project}>Project</a>
            <a href="#" className={styles.team}>Team</a>
            <button className={styles.joinButton}>JOIN US</button>
            <button type='button' className={styles.profile}
              onClick={e => {
                setShowProfile(true);
              }}>
              <div
                className={`${styles.profilePicNavbar} ${profilePic ? styles.hasImage : styles.defaultBg}`}
                style={profilePic ? { backgroundImage: `url(${profilePic})` } : {}}
              />
            </button>
          </div>
        </div>
      </div> 

      {/* Sidebar */}
      <div className={`offcanvas offcanvas-end ${styles.sideBar}`} id="sideBar">
        <div className='offcanvas-header p-2'>
          <button className={styles.closeButton} data-bs-dismiss='offcanvas'>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask
                id="mask0_1881_3187"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="15"
                height="15"
              >
                <rect
                  width="19.0553"
                  height="2.1572"
                  rx="1.0786"
                  transform="matrix(-0.707124 -0.70709 0.707124 -0.70709 13.4746 15)"
                  fill="#D9D9D9"
                />
                <rect
                  width="19.0553"
                  height="2.1572"
                  rx="1.0786"
                  transform="matrix(0.707124 -0.70709 0.707124 0.70709 0 13.4727)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1881_3187)">
                <rect width="15.1008" height="15.1001" fill="#202124" />
              </g>
            </svg>
          </button>
        </div>
        {/* Sidebar sections */}
        <div className='offcanvas-body'>
          <div className='d-flex flex-column align-items-center'>
            <button type='button' className={styles.profile}
              onClick={e => {
                setShowProfile(true);
              }}
            >
              <div
                className={`${styles.profilePicSideNav} ${profilePic ? styles.hasImage : styles.defaultBg}`}
                style={profilePic ? { backgroundImage: `url(${profilePic})` } : {}}
              />
            </button>

          {/* Other Sections */}
            <div className={`${styles.otherSection} d-flex flex-column gap-5 align-items-center`}>
              <a href="#" className={styles.home}>Home</a>
              <a href="#" className={styles.events}>Events
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.6667 8.08333V13.3333C11.6667 13.6428 11.5437 13.9395 11.325 14.1583C11.1062 14.3771 10.8094 14.5 10.5 14.5H1.16667C0.857247 14.5 0.560501 14.3771 0.341709 14.1583C0.122916 13.9395 0 13.6428 0 13.3333V4C0 3.69058 0.122916 3.39383 0.341709 3.17504C0.560501 2.95625 0.857247 2.83333 1.16667 2.83333H6.41667C6.57138 2.83333 6.71975 2.89479 6.82915 3.00419C6.93854 3.11358 7 3.26196 7 3.41667C7 3.57138 6.93854 3.71975 6.82915 3.82915C6.71975 3.93854 6.57138 4 6.41667 4H1.16667V13.3333H10.5V8.08333C10.5 7.92862 10.5615 7.78025 10.6709 7.67085C10.7802 7.56146 10.9286 7.5 11.0833 7.5C11.238 7.5 11.3864 7.56146 11.4958 7.67085C11.6052 7.78025 11.6667 7.92862 11.6667 8.08333ZM14 1.08333C14 0.928624 13.9385 0.780251 13.8291 0.670855C13.7197 0.561458 13.5714 0.5 13.4167 0.5H8.75C8.63456 0.499909 8.52169 0.534072 8.42568 0.598163C8.32966 0.662255 8.25483 0.753392 8.21064 0.860039C8.16645 0.966686 8.15489 1.08405 8.17744 1.19726C8.19999 1.31048 8.25562 1.41446 8.33729 1.49604L10.2586 3.41667L7.17062 6.50396C7.06117 6.61341 6.99968 6.76187 6.99968 6.91667C6.99968 7.07146 7.06117 7.21992 7.17062 7.32938C7.28008 7.43883 7.42854 7.50032 7.58333 7.50032C7.73813 7.50032 7.88658 7.43883 7.99604 7.32938L11.0833 4.24135L13.004 6.16271C13.0855 6.24438 13.1895 6.30001 13.3027 6.32256C13.416 6.3451 13.5333 6.33355 13.64 6.28936C13.7466 6.24517 13.8377 6.17034 13.9018 6.07432C13.9659 5.97831 14.0001 5.86544 14 5.75V1.08333Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" className={styles.project}>Project</a>
              <a href="#" className={styles.team}>Team</a>
              <button className={styles.joinButton}>JOIN US</button>
            </div>
          </div>
        </div>
      </div>

      
      {showProfile && (
          <div className="profile-modal-overlay" onClick={handleClose}>
            <Profile onClose={handleClose} isClosing={isClosing}/>
          </div>
        )
      }
    </>
  );
}

export default Navbar;
