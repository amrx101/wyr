import React, {Component, Fragment} from 'react'
import LoadingBar from 'react-redux-loading'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from "../../actions/authedUser"

class Nav extends Component {
    state = {
        redirectLogin: false
    }


    handleSignout = (e) => {
        e.preventDefault()
        this.props.dispatch(signOut())
        this.setState(() => ({
            redirectLogin: true
        }))
    }

    render() {
        const {user} = this.props
        const {redirectLogin} = this.state

        if (redirectLogin === true) {
            return (<Redirect to="/login"/>)
        }

        return(
             <div className="menu">
                    <Link  to="/">DashBoard</Link>
                    <Link  to="/leaderboard" >LeaderBoard</Link>
                    <Link  to="/add">AddQuestion</Link>
                    <Link to="#" onClick={this.handleOnClick}>SignOut</Link>
            </div>
        )

        // return (
        //     <Fragment>
        //         <Navbar color="light" light expand="md">
        //             <NavbarBrand>{user.name}, Would You Rather...</NavbarBrand>
        //             <BoostrapNav>
        //                 <NavItem>
        //                     <BootstrapNavLink tag={NavLink} exact to="/">Dashboard</BootstrapNavLink>
        //                 </NavItem>
        //                 <NavItem>
        //                     <BootstrapNavLink tag={NavLink}
        //                                       to="/leaderboard">Leaderboard</BootstrapNavLink>
        //                 </NavItem>
        //                 <NavItem>
        //                     <BootstrapNavLink tag={NavLink} to="/add">Add
        //                         Question</BootstrapNavLink>
        //                 </NavItem>
        //                 <NavItem>
        //                     <BootstrapNavLink tag={NavLink} to="#"
        //                                       onClick={this.handleSignout}>Signout</BootstrapNavLink>
        //                 </NavItem>
        //             </BoostrapNav>
        //         </Navbar>
        //         <LoadingBar/>
        //     </Fragment>
        // )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(Nav)