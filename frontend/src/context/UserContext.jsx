
import React, { createContext, useContext, useState, useEffect } from "react";



const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("Firstname");
    const [lastName, setLastName] = useState("Lastname");
    const [username, setUsername] = useState("@");
    const [gdgID, setGdgID] = useState("");
    const [expNumber, setExpNumber] = useState(1000);
    // const [idPad, setIdPad] = useState("");
    
    const [user, setUser] = useState({
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        gdgID: "GDGTUP-25-1448"
    });
    
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

    const logout = () => {
        setGdgID(null); // Fix: should be null, not 123
        setUser(null);
        setFirstName("Firstname");
        setLastName("Lastname");
        setUsername("@username");
        setProfilePic(null);
        localStorage.removeItem("profilePic");
    };

    return (
        <UserContext.Provider value={{
            firstName, setFirstName,
            lastName, setLastName, 
            username, setUsername,
            gdgID, setGdgID,
            expNumber, setExpNumber,
            profilePic, setProfilePic,
            user, setUser,
            logout,
        }}>
            {children}    
        </UserContext.Provider>     
    );
};

export const useUser = () => useContext(UserContext);