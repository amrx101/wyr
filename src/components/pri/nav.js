import React, {Component, Fragment} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from "../../actions/authedUser"

class Nav extends Component {
    state = {
        redirectLogin: false
    }

    handleOnClick = (e) => {
        e.preventDefault()
        const {dispatch} = this.props

        dispatch(signOut())
        this.setState({redirectLogin: true})
    }

    render() {
        const {redirectLogin} = this.state

        if (redirectLogin === true) {
            return (<Redirect to="/login"/>)
        }

        var styleMenu = {
            width: "20%",
            height: "40px"
        }
        var styleLinks  = {
            margin: "100px",
            "font-size": "x-large",
        }
        return(
            <Fragment>
                <div className="dashboard"style={styleMenu}>
                    <div className="menu" >
                            <Link  to="/" className="dsb" style={styleLinks} >DashBoard</Link>
                            <Link  to="/leaderboard" style={styleLinks}>LeaderBoard</Link>
                            <Link  to="/add" style={styleLinks}>AddQuestion</Link>
                            <Link to="#" onClick={this.handleOnClick} style={styleLinks}>SignOut</Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default connect()(Nav)