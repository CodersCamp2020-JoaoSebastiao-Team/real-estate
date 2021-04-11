import React, {createContext, useState} from "react";
import {userTypes} from './enums'


type userType = {
    jwt: string,
    jwt2: string,
    auth: boolean,
    type: userTypes
}
type userContextType = {
    user: userType,
    login: (jwt:string, jwt2:string, type: userTypes) => void,
    logout: () => void,

}

const contextDefaultValues: userContextType = {
    user: {
        jwt: "",
        jwt2: "",
        auth: false,
        type: userTypes.unlogged
    },
    login: () => {},
    logout: () => {}
};

export const UserContext = createContext<userContextType>(contextDefaultValues);



export const UserProvider = ({ children }:any) => {

    const [user, setUser] = useState<userType>({ jwt: "", jwt2: "", auth: false, type: userTypes.unlogged});

    const login = (jwt:string, jwt2:string, type: userTypes) => {
        setUser({
            jwt: jwt,
            jwt2: jwt2,
            auth: true,
            type: type
        });
    };

    const logout = () => {
        setUser({
            jwt: "",
            jwt2: "",
            auth: false,
            type: userTypes.unlogged
        });
    };


    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
);
}

