import { Link } from '@tanstack/react-router';
import { AuthHeader } from '../components/auth/AuthHeader'
import { LoginForm } from '../components/auth/LoginForm'
import styles from '../css/Login.module.scss'

export const Login = () => {
    return (
        <div className={styles.mainContainer}>
            <AuthHeader/>
            <LoginForm/>
            <Link to="/register">Don't have an account yet? Signup!</Link>
            <div className={styles.divider}/>
        </div>
    );
}