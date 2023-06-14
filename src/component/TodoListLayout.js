import "./TodoListLayout.css";

const TodoListLayout = ({sendform, children}) => {
    return(
        <section>
            <h2>Today Todos</h2>
            <div>{sendform}</div>
            <div>{children}</div>
        </section>
    )
}
export default TodoListLayout;