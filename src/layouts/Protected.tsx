import { Navigate, Outlet } from '@tanstack/react-router';
import { Footer } from "../components/Footer";
import styles from '../css/ProtectedLayout.module.scss'
import { useAuth } from '../hooks/useAuth';
import { DotLoader } from 'react-spinners';
import { Navbar } from '../components/Navbar';
import { NavbarWeb } from '../components/NavbarWeb';

export const Protected = () => { 
    const {user, initializing} = useAuth();

    if (initializing) {
        return (
            <div className={styles.loading}>
                <DotLoader
                    color="#36d7b7"
                    size={150}
                />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login"/>
    }

    return ( 
        <div className={styles.mainContainer}>
            {/* <NavbarWeb/> */}
            <NavbarWeb/>
            <Outlet/>
            <Navbar />
            <Footer/>
        </div>
    );
}