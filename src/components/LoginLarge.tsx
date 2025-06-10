import styles from '../css/LoginLarge.module.scss';
import { LoginFormLarge } from './auth/LoginFormLarge';

export const LoginLarge = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.top}> 
                <h1>Todo</h1>
                <p>Whenever - wherever</p>
            </div>
            <div className={styles.bottom}>
                <LoginFormLarge/>
            </div>
        </div>
    );
}