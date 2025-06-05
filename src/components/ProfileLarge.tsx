import styles from '../css/ProfileLarge.module.scss';
import { useAuth } from '../hooks/useAuth';
import flowers from '../assets/frogflower.png';

export const ProfileLarge = () => {
    const { user } = useAuth();
    const imageSrcUrl = user?.photoURL || '/avatars/elephant.png';

    return (
        <div className={styles.mainContainer}>
            <div className={styles.left}>
                <img src={imageSrcUrl} className={styles.avatar}/>
                <p className={styles.username}>{user?.email}</p>
                <p>Edit functionality in progress.</p>
                <div className={styles.bottomDivider}/>
            </div>
            <div className={styles.right}>
                <img src={flowers} className={styles.flowers}/>
            </div>
        </div>
    );
}