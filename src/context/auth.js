import React, { createContext, useState } from "react";

const AuthContext = createContext({});
 
export const AuthProvider = ({children}) => {
  
    const [signed, setSigned] = useState(false)
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)
   
    function markAsSigned() {
       setSigned(true)
    }
 
    function markAsNotSigned() {
       setSigned(false)
    }

    function login(user, type){
        setUser(user)
        setRole(type)
    }

    function logout(user){
        setUser(null)
        setRole(null)
    }

    return (<AuthContext.Provider value={{ signed, markAsSigned, markAsNotSigned, user, login, logout, role }}>
       {children}
    </AuthContext.Provider>
    )
};
 
export default AuthContext;