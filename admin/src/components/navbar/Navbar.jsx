import React, { useContext } from 'react';
import {Language, Notifications, Settings} from '@mui/icons-material'
import './navbar.css';
import { logout } from '../../context/authContext/apiCall';
import { AuthContext } from '../../context/authContext/authContext';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const {dispatch} = useContext(AuthContext)
 const handleLogout = (e)=>{
     logout(dispatch)
 }
    return (
        <div className='navbar'>
            <div className="navbarWrapper">
                <div className="navbarLeft">
                    <span className='logo' >
                        THAQU ADMIN
                    </span>
                </div>
                <div className="navbarRight">
                    <div className="iconNavbarContainer">
                    <Notifications/>
                        <span className='badge'>2</span>
                    </div>
                    <div className="iconNavbarContainer">
                    <Language/>
                    </div>
                    <div className="iconNavbarContainer">
                      <Settings/>
                    </div>
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQFZTyMaSBOmFw/profile-displayphoto-shrink_200_200/0/1630742027110?e=1649289600&v=beta&t=36ehog6GsvYau-XS5KfKWkoFi9c0ie8mmRmme7a_Yvs" alt="" className="imageAvatar" />
                <Link to="">
                    <button onClick={handleLogout} className="logoutButton" >logout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
