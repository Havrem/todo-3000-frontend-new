import type { Todo } from "../types/todo";
import { TodoItem } from "./TodoItem";
import styles from '../css/TodoList.module.scss'

export const TodoList = ({todos}:{todos: Todo[]}) => {
    return (
        <div className={styles.mainContainer}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/> //The property object sent to todoitem looks like {todo:todo, otherthing:otherthing...} automatically, so you have to deconstruct it on the other side no way around it.
            ))}
        </div>
    );
}