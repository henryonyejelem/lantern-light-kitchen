import { createContext, useState, useContext } from "react";
const UserContext = createContext();
const UserUpdateContext = createContext();

export function useUser(){
    return useContext(UserContext)
}

export function useUserUpdate(){
    return useContext(UserUpdateContext)
}


function UserProvider({children}){    
    let windowLoggedIn = window.localStorage.getItem("isLoggedIn")
    let windowEmail = window.localStorage.getItem("email")

    if(!windowLoggedIn){
        windowLoggedIn = false
        windowEmail = ""
    }

    const [user, setUser] = useState({email:windowEmail})

    const handleUser = (email) => {
        setUser({email: email})
    }

    return(
        <UserContext.Provider value={user}>
            <UserUpdateContext.Provider value={handleUser}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    )
}

export default UserProvider;