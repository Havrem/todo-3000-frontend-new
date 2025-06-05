import { useEffect } from 'react';
import styles from '../css/Dashboard.module.scss'
import { useTodos } from '../hooks/useTodos';
import { toast } from 'react-toastify';
import { PuffLoader } from 'react-spinners';
import dayjs from 'dayjs';
import grass from '../assets/grass.png';

export const Dashboard = () => {
    const {data: todos = [], isLoading, isError} = useTodos();
    const upcoming = todos
            .filter(todo => !todo.completed)
            .sort((a, b) => new Date(a.due).getTime() - new Date(b.due).getTime())
            .slice(0, 2);

    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong!");
        }
    }, [isError])

    if (isLoading) return (
        <div className={styles.spinner}>
            <PuffLoader
                color="#36d7b7"
                size={200}
            />
        </div>
    );

    const completed = todos.filter(todo => todo.completed).length;
    const remaining = todos.length - completed;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <img src="/avatars/elephant.png" className={styles.avatar}></img>
                <div className={styles.statistic}>
                    <p>Completed: {completed}</p>
                    <p>Remaining: {remaining}</p>
                </div>
            </div>

            <div className={styles.upcoming}>
                <label>Upcoming</label>

                {upcoming.length == 0 ? 
                (
                    <p>It's empty here.</p>
                ) :
                (
                    <div className={styles.list}>
                    {upcoming.map((todo) => {
                        return (
                            <div key={todo.id} className={styles.item}>
                                <p>Title <span>{todo.title}</span></p>
                                <p>Due <span>{dayjs(todo.due).format('dddd, MMM D')}</span></p>
                            </div>
                        );
                    })}
                </div>
                )}

                <img src={grass} className={styles.grass}/>
            </div>
        </div>
    );
}