// import KeyboardIcon from "../../assets/KeyBoardIcon";
import './Header.css'
import KeyboardIcon from "../icons/KeyboardIcon/KeyboardIcon";
import CrownRankingIcon from "../icons/CrownRankingIcon/CrownRankingIcon";
import AboutIcon from "../icons/AboutIcon/AboutIcon";
import SettingsIcon from "../icons/SettingsIcon/SettingsIcon";
import BellIcon from "../icons/BellIcon/BellIcon";
import ProfileIcon from '../icons/ProfileIcon/ProfileIcon';

export default function Header() {
    return (
        <header>
            <div className="websiteLogo">
                <div className="logo">
                    <img src="./src/assets/monkey-type-logo.png" alt="monkey type logo" />
                </div>
                <div className="name">
                    <p>monkeytype</p>
                </div>
            </div>
            <nav>
                <div className="typingConfiguration">
                    <KeyboardIcon color = '#636768'/>
                    <CrownRankingIcon color = '#636768'/>
                    <AboutIcon color = '#636768'/>
                    <SettingsIcon color = '#636768'/>
                </div>
                <div className="userConfiguration">
                    <BellIcon color='#636768'/>
                    <ProfileIcon color='#636768'/>
                </div>
            </nav>
        </header>
    );
}
