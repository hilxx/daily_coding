// import logo from './logo.svg';
import './App.css';
import TodoListLayout from './component/TodoListLayout';

function App() {
  return (
    <div className="App">
      <div className="header">TODO: / DELETE: / REMIND: </div>
      <TodoListLayout/>
    </div>
  );
}

export default App;
