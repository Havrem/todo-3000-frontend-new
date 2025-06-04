import { PuffLoader} from 'react-spinners';
import { AddTodo } from '../components/AddTodo';
import { TodoList } from '../components/TodoList';
import styles from '../css/Todos.module.scss'
import { useTodos } from '../hooks/useTodos';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';

export const Todos = () => {
    const {data: todos, isLoading, isError} = useTodos();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong!");
            navigate({to: '/dashboard'});
        }
    }, [isError])

    if (isLoading) return (
        <div className={styles.spinner}>
            <PuffLoader
                color="#36d7b7"
                size={200}
            />
        </div>);

    return (
        <div className={styles.mainContainer}>
            {/* <h1>Todos</h1> */}
            <AddTodo/>
            <TodoList todos={todos ?? []}/>
        </div>
    );
}