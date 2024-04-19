import { EditTodoForm } from "../EditTodoForm/EditTodoForm";
import { TodoItem } from "../TodoItem/TodoItem";
import './TodoList.css';


export function TodoList({ todos, toggleComplete, deleteTodo, editTodo, editTask}) {
  return (
    <ul className="TodoList list-group">
      {todos.map((todo) => {
        return (
          todo.edit
            ? <EditTodoForm editTask={editTask} task={todo} />
            : <TodoItem 
                task={todo} 
                key={todo.id} 
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo}
                editTodo={editTodo}
             />
        );
      })}
    </ul>
  );
}