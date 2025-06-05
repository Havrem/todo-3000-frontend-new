import styles from '../css/Profile.module.scss';
import { useAuth } from '../hooks/useAuth';
import flowers from '../assets/flowers.png';
import { useNavigate } from '@tanstack/react-router';

export const Profile = () => {
    const { user, logout } = useAuth();
    const imageSrcUrl = user?.photoURL || '/avatars/elephant.png';
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate({to:'/login'});
    }

    return (
        <div className={styles.mainContainer}>
            <img src={imageSrcUrl} className={styles.avatar}/>
            <p className={styles.username}>{user?.email}</p>
            <img src={flowers} className={styles.flowers}/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}