import { useEffect, useState } from 'react';
import styles from '../css/TodosBoth.module.scss';
import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';
import type { Todo } from '../types/todo';
import Modal from 'react-modal';
import { CreateTodoForm } from './CreateTodoForm';

export const TodosBoth = () => {
    const { data: todos = [] } = useTodos();
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const selected = todos.find(t => t.id === selectedId) ?? null;

    const handleAdd = () => {
        setModalIsOpen(true);
    }

    useEffect(() => {
  if (todos.length === 0) {
    setSelectedId(null);
    return;
  }

  if (!selected) {
    setSelectedId(todos[0].id);
  }
}, [todos]);


    return (
        <div className={styles.mainContainer}>
            <div className={styles.top}>
                <h1>Todos</h1>
                <button className={styles.addBtn} onClick={handleAdd}>Add Todo</button>
            </div>

            <div className={styles.bottom}>
                <div className={styles.left}>
                    <h2>Manage</h2>
                    <div className={styles.list}>
                        {todos.map(todo => (
                            <TodoItem todo={todo} key={todo.id} select={setSelectedId}/>
                        ))}
                    </div>
                </div>

                <div className={styles.right}>
                    {selected ? (
                        <>
                            <p>Title: {selected.title}</p>
                            <p>Description: {selected.description}</p>
                            <p>Status: {selected.completed ? "Done" : "Not done"}</p>
                        </>
                        ) : (
                            <p>Select a todo to view details.</p>
                    )}
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className={styles.modalThing}
            >
                <CreateTodoForm onCancel={() => setModalIsOpen(false)}/>
            </Modal>
        </div>
    );
}