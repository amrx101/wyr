import React, { Component } from 'react'
import { connect } from 'react-redux'


class SignUp extends Component {

    state = {
        name: '',
        avatar: '',
        id: '',
        newRegistration: false,
    }

    render() {
        return (
			<div className="Modal">
				<form 
					onSubmit={this.props.onSubmit}
					className="ModalForm">
					<input
						id="name"
						type="text"
						placeholder="Jack-Edward Oliver" />
					<input
						id="username"
						type="email"
						placeholder="mrjackolai@gmail.com" />
					<input
						id="password"
						type="password"
						placeholder="password" />
					<button>
						Signup <i className="fa fa-fw fa-chevron-right"></i>
					</button>
				</form>
			</div>
		);
    }
}

export default connect()(SignUp)