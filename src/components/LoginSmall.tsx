import styles from '../css/LoginSmall.module.scss';
import { LoginFormSmall } from './auth/LoginFormSmall';

export const LoginSmall = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.top}> 
                <h1>Todo</h1>
                <p>Whenever - wherever</p>
            </div>
            <div className={styles.bottom}>
                <LoginFormSmall/>
                <div className={styles.filler}>
                </div>
            </div>
        </div>
    );
}