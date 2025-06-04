import type { Todo } from "../types/todo";
import styles from '../css/TodoItem.module.scss'
import { RemoveIcon } from "./icon/RemoveIcon";
import { CompleteIcon } from "./icon/CompleteIcon";
import { NotCompleteIcon } from "./icon/NotCompleteIcon";
import { useDeleteTodo, useUpdateTodo } from "../hooks/useTodos";
import { toast } from "react-toastify";
import type { UpdateTodoRequest } from "../types/api";
import { EditTodoForm } from "./EditTodoForm";
import { useState } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const TodoItem = ({todo}:{todo:Todo}) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const deleteTodo = useDeleteTodo();
    const updateTodo = useUpdateTodo();

    const handleComplete = async () => {
        const updateRequest: UpdateTodoRequest = {
            completed: !todo.completed
        }

        await updateTodo.mutateAsync({id: todo.id, data: updateRequest});
        toast.success("Todo updated.")
    }

    const handleView = () => {
        setModalIsOpen(true);
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
            <button onClick={() => handleView()}>
                {todo.completed ? 
                    (
                        <p style={{textDecoration:'line-through', color:'gray'}}>{todo.title}</p>
                    ) : 
                    (
                        <p>{todo.title}</p>
                    )
                }
            </button>
            <button className={styles.remove} onClick={() => handleRemove()}>
                <RemoveIcon width={30} height={30} stroke="black" fill="none"/>
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className={styles.modalThing}
            >
                <EditTodoForm todo={todo} onCancel={() => setModalIsOpen(false)}/>
            </Modal>
        </div>
    );
}