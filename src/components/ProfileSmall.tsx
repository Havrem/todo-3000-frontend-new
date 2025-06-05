import { useNavigate } from '@tanstack/react-router';
import styles from '../css/ProfileSmall.module.scss';
import { useAuth } from '../hooks/useAuth';
import flowers from '../assets/flowers.png';

export const ProfileSmall = () => {
    const { user, logout } = useAuth();
    const imageSrcUrl = user?.photoURL || '/avatars/elephant.png';
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate({to:'/login'});
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.top}>
                <img src={imageSrcUrl} className={styles.avatar}/>
                <p className={styles.username}>{user?.email}</p>
                <p>Edit functionality in progress.</p>
            </div>
            <button className={styles.logout} onClick={handleLogout}>Logout</button>
            <div className={styles.bottom}>
                <img src={flowers} className={styles.flowers}/>
            </div>
        </div>
    );
}