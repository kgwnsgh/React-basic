import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3;  // state에 id값을 넣지 않는 이유는 setState할때 값이 변경됨을 감지해서 리 렌더링을 하기 위함인데 id는 그와 상관이 없기 때문

  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0001'
      },
      {
        id: 1,
        name: '호랑이',
        phone: '010-3000-0001'
      },
      {
        id: 2,
        name: '호주인',
        phone: '010-1000-0001'
      }
    ],
    keyword: '',
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  }

  handleCreate = (data) => {
    const { information } = this.state // 비구조 할당 문법을 통해서 this.state를 생략 할 수 있게 한다
    this.setState({
      information: information.concat({// 내장함수 concat을 사용해야 데이터를 information에 넣을수 있다
        ...data,
        id: this.id++
      }) 
    })
  }

  handleRemove = (id) => {
    const { information } = this.state; // 비할당 구조
    this.setState({
      information: information.filter(info => info.id !== id) // information의 id 값이 파라미터로 받은 id와 다른 값일경우 필터로 분류 (지정 대상과 같은 배열 빼고 배열을 새로 생성)
    })
  }

  handleUpdate = (id, data) => { // id 와 data를 받아서 id가 info.id와 같으면 내용을 업데이트하고 아니면 info 를 변경하지 않는 형태
    const { information } = this.state // 비구조 할당
    this.setState({
      information: information.map(
        info => {
          if(info.id === id) { 
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    });
  }
  

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        />
        {/* {JSON.stringify(this.state.information)} information에 내용이 잘 들어가는지 확인 */}
        {/* filter로 state.information에서 각지고 올 데이터를 조건을 걸고 indexOf를 통해 keyword와 같은 대상으로 추린다 */}
        <PhoneInfoList 
        data={this.state.information.filter(
          info => info.name.indexOf(this.state.keyword) > -1
        )} 
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
        /> {/* InfoList에 data값을 전달해주고 infomation 값을 출력 */} 
      </div>   
    );
  }
}

export default App;