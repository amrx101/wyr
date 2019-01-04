import React, {Fragment} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Nav from './nav'


const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render={(props) => {
        return (isAuthenticated?
                <Fragment>
                    <Nav/>
                        <Component {...props}/>
                </Fragment>
                : <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                }}/>
        )
    }}/>
)
function isEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function mapStateToProps({authedUser}) {
    return {
        isAuthenticated: !isEmpty(authedUser)
    }
}

export default connect(mapStateToProps, null, null, {pure: false})(PrivateRoute)