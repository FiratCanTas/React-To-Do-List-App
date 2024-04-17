import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

// disaridan gelecek prop u destructing ettim task i aldim

const TodoCard = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  console.log('todo', todo);
  return (
    <div className="todo">
      {/*disaridan gelen "task" bir obje oldugu icin icerisindeki task degerine ulastip paragraf olarak yazdirdim */}

      <p
        className={`${todo.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.task}
      </p>

      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default TodoCard;
