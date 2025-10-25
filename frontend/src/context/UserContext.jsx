
import React, { createContext, useContext, useState, useEffect} from "react";


const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [firstName, setFirstName] = useState(() => localStorage.getItem("firstName") || "");
    const [lastName, setLastName] = useState(() => localStorage.getItem("lastName") || "");
    const [username, setUsername] = useState(() => localStorage.getItem("username") || "");
    const [gdg_pts, setGdg_pts] = useState(() => {
        const stored = localStorage.getItem("gdg_pts");
        return stored !== null ? Number(stored) : 0;
    });
    const [profilePic, setProfilePic] = useState(() => localStorage.getItem("profilePic") || null);
    const [gdgID, setGdgID] = useState(() => localStorage.getItem("googler_id") || null);
    
    // Persist non-sensitive fields (NOT password)
    useEffect(() => {
        if (firstName) localStorage.setItem("firstName", firstName);
        else localStorage.removeItem("firstName");
    }, [firstName]);

    useEffect(() => {
        if (lastName) localStorage.setItem("lastName", lastName);
        else localStorage.removeItem("lastName");
    }, [lastName]);

    useEffect(() => {
        if (username) localStorage.setItem("username", username);
        else localStorage.removeItem("username");
    }, [username]);

    useEffect(() => {
        if (gdg_pts === null || gdg_pts === undefined) {
            localStorage.removeItem("gdg_pts");
        } else {
            localStorage.setItem("gdg_pts", gdg_pts);
        }
    }, [gdg_pts]);

    useEffect(() => {
        if (profilePic) localStorage.setItem("profilePic", profilePic);
        else localStorage.removeItem("profilePic");
    }, [profilePic]);

    useEffect(() => {
        if (gdgID) localStorage.setItem("googler_id", gdgID);
        else localStorage.removeItem("googler_id");
    }, [gdgID]);




    const logout = () => {
        setGdgID(null); 
        setFirstName();
        setLastName();
        setUsername();
        setGdg_pts(null);
        setProfilePic(null);
        localStorage.removeItem("profilePic");
        localStorage.removeItem("googler_id");
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("username");
        localStorage.removeItem("gdg_pts");
    };

    return (
        <UserContext.Provider value={{
            firstName, setFirstName,
            lastName, setLastName, 
            username, setUsername,
            gdgID, setGdgID,
            gdg_pts, setGdg_pts,
            profilePic, setProfilePic,
            logout,
        }}>
            {children}    
        </UserContext.Provider>     
    );
};

export const useUser = () => useContext(UserContext);