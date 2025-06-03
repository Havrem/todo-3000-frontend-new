import { AuthHeader } from '../components/auth/AuthHeader'
import { LoginForm } from '../components/auth/LoginForm'
import styles from '../css/Login.module.scss'

export const Login = () => {
    return (
        <div className={styles.mainContainer}>
            <AuthHeader/>
            <LoginForm/>
            <a>Don't have an account yet? Signup!</a>
            <div className={styles.divider}/>
        </div>
    );
}