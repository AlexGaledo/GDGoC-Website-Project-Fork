
import React, { createContext, useContext, useState, useEffect } from "react";



const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("Firstname");
    const [lastName, setLastName] = useState("Lastname");
    const [username, setUsername] = useState("@username");
    const [gdgID, setGdgID] = useState(null);
    const [expNumber, setExpNumber] = useState(1000);
    const [idPad, setIdPad] = useState("GDGTUP-25-1448");
    
    const [profilePic, setProfilePic] = useState(() => {
        const storedPic = localStorage.getItem("profilePic");
        return storedPic && storedPic.startsWith("data:image") ? storedPic : null;
    });

    useEffect(() => {
        if (profilePic) {
            localStorage.setItem("profilePic", profilePic)
        }
        else {
            localStorage.removeItem("profilePic");
        }
    }, [profilePic]);

    return (
        <UserContext.Provider value={{
            firstName, setFirstName,
            lastName, setLastName, 
            username, setUsername,
            gdgID, setGdgID,
            expNumber, setExpNumber,
            idPad, setIdPad,
            profilePic, setProfilePic
        }}>
            {children}    
        </UserContext.Provider>     
    );
};

export const useUser = () => useContext(UserContext);