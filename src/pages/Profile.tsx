import { useMediaQuery } from "react-responsive";
import { ProfileLarge } from "../components/ProfileLarge";
import { ProfileSmall } from "../components/ProfileSmall";

export const Profile = () => {
    const isDesktop = useMediaQuery({minWidth: 768});

    return (
        isDesktop ? <ProfileLarge/> : <ProfileSmall/>
    );
}