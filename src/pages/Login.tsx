import { useMediaQuery } from 'react-responsive';
import { LoginLarge } from '../components/LoginLarge';
import { LoginSmall } from '../components/LoginSmall';

export const Login = () => {
    const isDesktop = useMediaQuery({minWidth: 768});

    return (
        isDesktop ? <LoginLarge/> : <LoginSmall/>
    );
}