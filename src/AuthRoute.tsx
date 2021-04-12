import React, {useContext} from 'react'
import {Redirect, Route} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {UserContext} from "./userProvider";


export const AuthRoute = ({children, ...rest}:any) => {
    const {user} = useContext(UserContext)

    if (!user.jwt) return <Redirect to={`/login`}/>;

    const decoded:any = jwt_decode(user.jwt);
    const now = Date.now() / 1000;

    if (decoded.exp <= now) {
        return <Redirect to={`/login`}/>;
    }
    return <Route {...rest}>{children}</Route>
}