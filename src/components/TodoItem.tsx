import type { Todo } from "../types/todo";

export const TodoItem = ({todo}:{todo:Todo}) => {
    return <div>{todo.title}</div>;
}