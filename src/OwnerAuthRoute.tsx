import React, {useContext} from 'react'
import {Redirect, Route} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {UserContext} from "./userProvider";


export const OwnerAuthRoute = ({children, ...rest}:any) => {
    const {user} = useContext(UserContext)

    if (!user.jwt || !user.jwt2) return <Redirect to={`/`}/>;

    const decoded:any = jwt_decode(user.jwt);
    const decoded2:any = jwt_decode(user.jwt2);
    const now = Date.now() / 1000;

    if (decoded.exp <= now || decoded2.exp <= now) {
        return <Redirect to={`/`}/>;
    }
    return <Route {...rest}>{children}</Route>
}