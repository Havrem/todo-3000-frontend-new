import styles from '../../css/AuthHeader.module.scss';

export const AuthHeader = () => {
    return (
        <div className={styles.mainContainer}>
            <h1>Todo</h1>
            <div className={styles.divider}></div>
            <p>Whenever, wherever</p>
        </div>
    );
}