import { useMediaQuery } from 'react-responsive';
import { RegisterLarge } from '../components/RegisterLarge';
import { RegisterSmall } from '../components/RegisterSmall';

export const Register = () => {
    const isDesktop = useMediaQuery({minWidth: 768});

    return (
        isDesktop ? <RegisterLarge/> : <RegisterSmall/>
    );
}