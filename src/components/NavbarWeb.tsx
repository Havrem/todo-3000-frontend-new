import { Link, useNavigate} from '@tanstack/react-router';
import styles from '../css/NavbarWeb.module.scss'
import { HomeIcon } from './icon/HomeIcon';
import { ProfileIcon } from './icon/ProfileIcon';
import { TodoIcon } from './icon/TodoIcon';
import { useAuth } from '../hooks/useAuth';

export const NavbarWeb = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate({to:'/login'});
    }

    return (
        <nav className={styles.mainContainer}>
            <div className={styles.innerContainer}>
                <Link to="/dashboard"><HomeIcon width={30} height={30} fill='#000000'/></Link>
                <Link to="/todos"><TodoIcon width={30} height={30} fill='#000000'/></Link>
                <Link to="/profile"><ProfileIcon width={30} height={30} fill='#000000'/></Link>
                <button onClick={handleLogout} className={styles.logout}>Logout</button>
            </div>
        </nav>
    );
}