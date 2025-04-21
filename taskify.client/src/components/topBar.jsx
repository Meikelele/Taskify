import './styles/topBar.css';

import Avatar from '../images/margot_avatar.jpg';
import Search from '../images/search_icon.svg';


const TopBar = () => {


    return (
        <div className='topBar'>
            <div className='topBar__logo'>
                <h2 className='header'>Taskify</h2>
            </div>
            <div className='topBar__searchbar'>
                <img src={Search} alt="Search" width={20} height={20} className='searchIcon' />
                <input type="text" placeholder="just search bar"></input>
                
            </div>

            <div className='topBar__profile'>
                <img src={Avatar} width={40} height={40} alt="Avatar" />
            </div>
        </div>
    );
}


export default TopBar;