import React, { Component } from 'react';

class PhoneForm extends Component {

    input = null

    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); // submit시 새로고침을 방지
        this.props.onCreate(this.state)
        this.setState({ //submit 이후 input 값을 초기화
            name: '',
            phone: '',
        });
        this.input.focus();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                name='name'
                 placeholder='이름' 
                 onChange={this.handleChange}
                 value={this.state.name} 
                 ref={ ref => this.input = ref }
                />
                <input
                name='phone'
                 placeholder='전화번호'
                 onChange={this.handleChange}
                 value={this.state.phone} 
                />
                <button type='submit'>등록</button>
                {/* 인풋 값을 화면에 표시 
                <div>
                    {this.state.name}
                    {this.state.phone}
                </div>
                */}
            </form>
        );
    }
}

export default PhoneForm;