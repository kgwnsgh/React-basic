import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: '',
    }

    shouldComponentUpdate(nextProps, nextState) { // 최적화를 위해 사용되는 함수
        if(this.state !== nextState) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }
    
    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        // ture -> false ) onUpdate
        // false -> ture ) state에 into 값들 넣어주기

        const { info, onUpdate } = this.props
        if(this.state.editing) { // onUpdate 함수를 가지고와서 state에 변경된값을 name과 phone에 적용
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        } else { //this.props.info의 name과 phone의 값을 editing이 false -> ture로 될때 input에 입력
            this.setState({
                name: info.name,
                phone: info.phone,
            })
        }

        this.setState({
            editing: !this.state.editing, // editing 값을 반전
        })
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, phone} = this.props.info;
        const { editing } = this.state;

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };

        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div><input
                            name='name' 
                            onChange={this.handleChange}
                            value={this.state.name}

                             /></div>
                            <div><input 
                            name='phone'
                            onChange={this.handleChange}
                            value={this.state.phone}
                            /></div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    {   editing ? '적용' : '수정' }
                </button>
            </div>
        );
    }
}

export default PhoneInfo;