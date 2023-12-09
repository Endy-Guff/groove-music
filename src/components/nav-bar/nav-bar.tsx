import s from './nav-bar.module.scss'
import logo from '../../assets/images/logo-small.svg'
import {NavContainer} from "./nav-container.tsx";
import {Home} from "../../assets/icons/home.tsx";
import {Playlist} from "../../assets/icons/playlist.tsx";
import {NavBtn} from "./nav-btn.tsx";
import {useLocation} from "react-router-dom";
import {Profile} from "../../assets/icons/profile.tsx";
import {Logout} from "../../assets/icons/logout.tsx";

const bar1 = [
    {path: '/general', icon: Home},
    {path: '/playlists', icon: Playlist},
]

const bar2 = [
    {path: '/profile', icon: Profile},
    {path: '/sign-in', icon: Logout},
]

export const NavBar = () => {
    const location = useLocation();

    return (
        <div className={s.wrapper}>
            <img className={s.logo} src={logo} alt=""/>
            <NavContainer>
                {bar1.map(({path, icon: Icon}) => <NavBtn path={path}><Icon active={location.pathname===path}/></NavBtn>)}
            </NavContainer>
            <NavContainer>
                {bar2.map(({path, icon: Icon}) => <NavBtn path={path}><Icon active={location.pathname===path}/></NavBtn>)}
            </NavContainer>
        </div>
    );
};

