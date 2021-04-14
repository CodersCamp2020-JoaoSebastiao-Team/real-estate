import React, {createContext, useEffect, useState} from "react";
import {userTypes} from './enums'
import Cookies from 'js-cookie';

type userType = {
    jwt: string,
    jwt2: string,
    auth: boolean,
    type: userTypes,
    owner_id: string,
}
type userContextType = {
    user: userType,
    login: (jwt:string, jwt2:string, type: userTypes, owner_id: string) => void,
    logout: () => void,

}

const contextDefaultValues: userContextType = {
    user: {
        jwt: "",
        jwt2: "",
        auth: false,
        type: userTypes.unlogged,
        owner_id: ""
    },
    login: () => {},
    logout: () => {}
};

export const UserContext = createContext<userContextType>(contextDefaultValues);



export const UserProvider = ({ children }:any) => {

    const [user, setUser] = useState<userType>({ jwt: "", jwt2: "", auth: false, type: userTypes.unlogged, owner_id:""});


    useEffect(()=>{

        const jwt = Cookies.get("jwt");
        const jwt2 = Cookies.get("jwt2");
        const id = Cookies.get("owner_id")||"";
        if (jwt){
            if (jwt2){
                setUser({
                    jwt2: jwt2,
                    jwt: jwt,
                    type: userTypes.owner,
                    auth: true,
                    owner_id: id,
                });
            }else{
                setUser({
                    jwt2: '',
                    jwt: jwt,
                    type: userTypes.custom,
                    auth: true,
                    owner_id: ""
                });
            }


        }
    },[]);

    const login = (jwt:string, jwt2:string, type: userTypes, owner_id:string) => {
        Cookies.set('jwt',jwt);
        Cookies.set('jwt2',jwt2);
        Cookies.set("owner_id", owner_id);
        setUser({
            jwt: jwt,
            jwt2: jwt2,
            auth: true,
            type: type,
            owner_id: owner_id,
        });
    };

    const logout = () => {
        Cookies.remove('jwt');
        Cookies.remove('jwt2');
        Cookies.remove('owner_id');
        setUser({
            jwt: "",
            jwt2: "",
            auth: false,
            type: userTypes.unlogged,
            owner_id: ""
        });
    };


    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
);
}

