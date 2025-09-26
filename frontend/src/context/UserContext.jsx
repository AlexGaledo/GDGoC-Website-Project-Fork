
import React, { createContext, useContext, useState, useEffect } from "react";



const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("Alex");
    const [lastName, setLastName] = useState("Galedo");
    const [username, setUsername] = useState("@negahT");
    const [gdgID, setGdgID] = useState(1448);
    const [expNumber, setExpNumber] = useState(1000);
    const [idPad, setIdPad] = useState("GDGTUP-25-");
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        if (profilePic) {
            localStorage.setItem("profilePic", profilePic);
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