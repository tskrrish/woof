import './Header.css';
import Person4Icon from '@mui/icons-material/Person4';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <Person4Icon className="header__icon" fontSize='large' />
            </IconButton>

            <Link to="/">
            
            <img 
                className="header__logo"
                src="https://www.clipartmax.com/png/middle/271-2711905_pet-footprint-vector-pet-friendly-icon.png" 
                alt="woof logo" 
            />
            
            </Link>


            
            <Link to="/chat">
                <IconButton>
                    <MarkUnreadChatAltIcon className="header__icon" fontSize='large' />
                </IconButton>
            </Link>    
        </div>
    );
}

export default Header;
