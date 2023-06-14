import { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{
    render(){
        const {todosend} = this.props;
        console.log(todosend);
        const todolist = todosend.map(({text})=>(
            //여기서 text를 넣어받아서 TodoItem에 전달한다.
            <TodoItem text={text}/>
        ))
        return(
            <div>
                {todolist}
            </div>
        )
    }
}

export default TodoItemList;