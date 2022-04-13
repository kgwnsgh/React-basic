import React, { Component } from 'react';

class NameForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handlechage = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input 
                    name='name'
                    placeholder='이름' 
                    onChange={this.handlechage}
                    value={this.state.name} 
                />
                <input
                    name='number'
                    placeholder='번호'
                    onChange={this.handlechage}
                    value={this.state.number}
                />

                <div>
                    {this.state.name}
                    {this.state.number}
                </div>
            </div>
        );
    }
}

export default NameForm;