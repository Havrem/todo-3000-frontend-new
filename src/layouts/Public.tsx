import { Outlet } from '@tanstack/react-router';
import { Footer } from "../components/Footer";
import styles from '../css/PublicLayout.module.scss'

export const Public = () => { 
    return ( 
        <div className={styles.mainContainer}>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
}