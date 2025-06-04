import styles from '../css/Navbar.module.scss'

export const Navbar = () => {
    return (
        <nav className={styles.mainContainer}>
            <div className={styles.innerContainer}>
                <a>Home</a>
            <a>Notifications</a>
            <a>Profile</a>

                        <a>Home</a>
            <a>Notifications</a>
            <a>Profile</a>
            </div>
        </nav>
    );
}