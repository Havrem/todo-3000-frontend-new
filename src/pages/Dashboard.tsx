import { DashboardLarge } from "../components/DashboardLarge";
import { DashboardSmall } from "../components/DashboardSmall";
import { useMediaQuery } from 'react-responsive';

export const Dashboard = () => {
    const isDesktop = useMediaQuery({minWidth: 768});

    return (
        isDesktop ? <DashboardLarge/> : <DashboardSmall/>
    );
}