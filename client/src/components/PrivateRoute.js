import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [cookies] = useCookies(['sesh']);
    return(
        <Route
            {...rest}
            render={(props) => {
                return <Component {...props} />
            }}
        ></Route>
    )
}

export default PrivateRoute;