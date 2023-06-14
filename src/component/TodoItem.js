import { Component } from 'react';
import "./todoItem.css";

class TodoItem extends Component {
    render(){
        const {text} = this.props;
        console.log(text);
        return(
            <div className="todoItem">
                <span>x</span>
                <div>{text}</div>
            </div>
        )
    }
}

export default TodoItem;