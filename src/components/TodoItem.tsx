import type { Todo } from "../types/todo";
import styles from '../css/TodoItem.module.scss'
import { RemoveIcon } from "./icon/RemoveIcon";
import { CompleteIcon } from "./icon/CompleteIcon";
import { NotCompleteIcon } from "./icon/NotCompleteIcon";
import { useDeleteTodo, useUpdateTodo } from "../hooks/useTodos";
import { toast } from "react-toastify";
import type { UpdateTodoRequest } from "../types/api";
import Modal from 'react-modal';
import { EditIcon } from "./icon/EditIcon";

Modal.setAppElement('#root');

export const TodoItem = ({todo, select, edit}:{todo:Todo, select: (todo: Todo) => void, edit: (todo: Todo) => void}) => {
    const deleteTodo = useDeleteTodo();
    const updateTodo = useUpdateTodo();

    const handleComplete = async () => {
        const updateRequest: UpdateTodoRequest = {
            completed: !todo.completed
        }

        await updateTodo.mutateAsync({id: todo.id, data: updateRequest});
        toast.success("Todo updated.")
    }

    const handleSelect = () => {
        select(todo);
    }

    const handleEdit = () => {
        edit(todo);
    }

    const handleRemove = async () => {
        await deleteTodo.mutateAsync(todo.id);
        toast.success("Todo removed.")
    }

    return (
        <div className={styles.mainContainer}>
            {todo.completed ?
                (<button onClick={() => handleComplete()}>
                    <CompleteIcon width={30} height={30} fill='#000000'/>
                </button>)
                :(<button onClick={() => handleComplete()}>
                    <NotCompleteIcon width={30} height={30} fill='#000000'/>
                </button>) 
            }
            <button onClick={() => handleSelect()}>
                {todo.completed ? 
                    (
                        <p style={{textDecoration:'line-through', color:'gray'}}>{todo.title}</p>
                    ) : 
                    (
                        <p>{todo.title}</p>
                    )
                }
            </button>
            <div className={styles.left}>
                <button onClick={handleEdit} className={styles.edit}>
                    <EditIcon width={30} height={30} fill='none'/>
                </button>
                <button className={styles.remove} onClick={() => handleRemove()}>
                    <RemoveIcon width={30} height={30} stroke="black" fill="none"/>
                </button>
            </div>
        </div>
    );
}