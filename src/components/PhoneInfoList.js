import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }

    render() {
        const { data, onRemove, onUpdate } = this.props;

        // if(!data) return null; // 만약 data가 없으면 null을 

        const list = data.map(
            info => (<PhoneInfo 
                onRemove={onRemove}
                onUpdate={onUpdate}
                 info={info} key={info.id}
                />) // id값을 정하지 않은 상태에서 는 map() 함수의 undefined 오류가 출력
        );
        return (
            <div>
                {list}      
            </div>
        );
    }

}

export default PhoneInfoList;