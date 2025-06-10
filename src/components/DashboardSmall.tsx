import { useEffect } from 'react';
import styles from '../css/DashboardSmall.module.scss';
import { useTodos } from '../hooks/useTodos';
import { toast } from 'react-toastify';
import { PuffLoader } from 'react-spinners';
import dayjs from 'dayjs';
import { useAuth } from '../hooks/useAuth';

export const DashboardSmall = () => {
    const { user } = useAuth();
    const imageSrcUrl = user?.photoURL || '/avatars/elephant.png';
    const {data: todos = [], isLoading, isError} = useTodos();
    const upcoming = todos
            .filter(todo => !todo.completed)
            .sort((a, b) => new Date(a.due).getTime() - new Date(b.due).getTime())
            .slice(0, 4);

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
            <div className={styles.top}>
                <img src={imageSrcUrl} className={styles.avatar}/>
                <div className={styles.right}>
                    <h2>Statistic</h2>
                    <div className={styles.statistic}>
                        <p>Completed: {completed}</p>
                        <p>Remaining: {remaining}</p>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.left}>
                    <div className={styles.upcoming}>
                        <h2>Upcoming</h2>

                        {upcoming.length === 0 ? (
                            <p>No upcoming tasks.</p>
                        ) : (
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
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.filler}></div>
                </div>
            </div>
        </div>
    );
}