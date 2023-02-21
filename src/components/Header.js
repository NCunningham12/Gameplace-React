import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <Link to="/" className="logo">
                    <img
                        className="header-logo"
                        src={require('../app/assets/img/gameplaceLogo.png')}
                        alt="Gameplace Logo"
                    />
                </Link>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
