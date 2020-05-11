import React from 'react'
import PropTypes from 'prop-types'

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            purpose: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value})
        console.log(this.state)
    }

    handleClick = () => {
        
    }


    render() {

        return(
            <section>
                <h3>Welcome, please sign in:</h3>
                <input
                    type='text'
                    name='name'
                    placeholder='Enter your name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='email'
                    placeholder='Enter your email'
                    value={this.state.email}
                    onChange={this.handleChange}
                 />

                 <select
                    name='purpose'
                    onChange={this.handleChange}>
                    <option value=''>-- Please choose a purpose --</option>
                    <option value='business'>Business</option>
                    <option value='vacation'>Vacation</option>
                    <option value='fugitive'>Fugitive on the Run</option>
                 </select>

                 <button onClick={this.handleClick}>Sign In</button>

            </section>
        )
    }
}

export default SignIn 

SignIn.propTypes = {

}