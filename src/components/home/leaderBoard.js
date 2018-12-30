import React, {Component} from 'react'
import {connect} from 'react-redux'

import User from '../user/user'

class LeaderBoard extends Component {
    render() {
        const {users} = this.props
        console.log("In Leader Board, ", this.props)
        return (
            <div>
                <h1>LeaderBoard</h1>
                {users.map((userId) =>
                    <User key={userId} id={userId}/>
                )}
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users: Object.keys(users)
            .sort((a, b) => ((Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length)))
    }
}

export default connect(mapStateToProps)(LeaderBoard)