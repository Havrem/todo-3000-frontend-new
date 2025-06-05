import { Link } from '@tanstack/react-router';
import { AuthHeader } from '../components/auth/AuthHeader'
import { LoginForm } from '../components/auth/LoginForm'
import styles from '../css/Login.module.scss'
import { RegisterForm } from '../components/auth/RegisterForm';

export const Register = () => {
    return (
        <div className={styles.mainContainer}>
            <AuthHeader/>
            <RegisterForm/>
            <Link to="/login">Cancel registration</Link>
            <div className={styles.divider}/>
        </div>
    );
}