import React, {createContext, useEffect, useState} from "react";
import {userTypes} from './enums'
import Cookies from 'js-cookie';

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


    useEffect(()=>{

        const jwt = Cookies.get("jwt");
        const jwt2 = Cookies.get("jwt2");
        if (jwt){
            if (jwt2){
                setUser({
                    jwt2: jwt2,
                    jwt: jwt,
                    type: userTypes.owner,
                    auth: true,
                });
            }else{
                setUser({
                    jwt2: '',
                    jwt: jwt,
                    type: userTypes.custom,
                    auth: true,
                });
            }


        }
    },[]);

    const login = (jwt:string, jwt2:string, type: userTypes) => {
        Cookies.set('jwt',jwt);
        Cookies.set('jwt2',jwt2);
        setUser({
            jwt: jwt,
            jwt2: jwt2,
            auth: true,
            type: type
        });
    };

    const logout = () => {
        Cookies.remove('jwt');
        Cookies.remove('jwt2');
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

