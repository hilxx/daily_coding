// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import TodoListLayout from './component/TodoListLayout';
import Form from "./component/Form"
// import { render } from '@testing-library/react';
import TodoItemList from './component/TodoItemList';

class App extends Component {
  //1. 속성 변수
  state = {
    uinput:"",
    todos:[
      //object
      {id:0, text:"포트폴리오 코드 다시 보기", checked:false},
      {id:1, text:"react 복습하기", checked:false},
      {id:2, text:"javascript 복습하기", checked:false},
      {id:3, text:"자소서/이력서 수정하기", checked:false},
      {id:4, text:"'어서 오세요, 휴남동 서점입니다' 책 읽기", checked:false},
      {id:5, text:"그림 연습하기", checked:false}
    ]
  }
  //2. 속성 변수를 바꿔줄 메서드
  handleInput = (e) => {
    this.setState({
      uinput: e.target.value
    })
  }
  handleAdd = () => {
    this.setState({
      uinput:"",
      todos: this.state.todos.concat({
        id: this.state.todos.length,
        text: this.state.uinput,
        checked: false
      })
    })
  }
  //3. 붙일 내용
  render() {
    const {todos, uinput} = this.state;
    return (
      <div className="App">
        <div className="header">TODO: / DELETE: / REMIND: </div>
        <TodoListLayout sendform={<Form
         uValue={uinput}
         addInput={this.handleInput}
         addTodo={this.handleAdd}/>}>
          <TodoItemList todosend={todos}/>
        </TodoListLayout>
      </div>
    );
  }
}

export default App;
