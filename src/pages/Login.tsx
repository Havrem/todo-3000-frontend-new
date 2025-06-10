import { Link } from '@tanstack/react-router';
import { AuthHeader } from '../components/auth/AuthHeader'
import { LoginForm } from '../components/auth/LoginForm'
import styles from '../css/Login.module.scss'
import { useMediaQuery } from 'react-responsive';
import { LoginLarge } from '../components/LoginLarge';
import { LoginSmall } from '../components/LoginSmall';

export const Login = () => {
    const isDesktop = useMediaQuery({minWidth: 768});

    return (
        isDesktop ? <LoginLarge/> : <LoginSmall/>
    );
}