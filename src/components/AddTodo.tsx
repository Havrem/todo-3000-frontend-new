import { useState } from 'react';
import styles from '../css/AddTodo.module.scss'
import Modal from 'react-modal';
import { CreateTodoForm } from './CreateTodoForm';

Modal.setAppElement('#root');

export const AddTodo = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.mainContainer}>
            <div><h1>Todos</h1></div>
            <button onClick={() => setModalIsOpen(true)}>Add todo</button>

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