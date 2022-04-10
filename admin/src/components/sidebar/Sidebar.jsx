import { Assessment, Email, Forum, LineStyle, List, ManageAccounts, Paid, Person, PlayArrow, ProductionQuantityLimits, RateReview, Report, Timeline, TrendingUp } from '@mui/icons-material';
import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">DashBoard</h3>
                    <ul className="sidebarList">
                       <Link to="/"className='link'>
                        <li className="sidebarListItems active">
                            <LineStyle className='sidebarIcons' />
                           Home
                        </li>
                        </Link>
                        <li className="sidebarListItems">
                            <Timeline className='sidebarIcons' />
                            Analytics

                        </li>
                        <li className="sidebarListItems">
                            <TrendingUp className='sidebarIcons' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                    <Link to="/users"className='link'>
                        <li className="sidebarListItems ">
                            <Person className='sidebarIcons' />
                            Users
                        </li>
                        </Link>
                        <Link to="/movies"className='link'>
                        <li className="sidebarListItems">
                            <PlayArrow className='sidebarIcons' />
                            Movies
                        </li>
                        </Link>
                        <Link to="/lists"className='link'>
                        <li className="sidebarListItems">
                            <List className='sidebarIcons' />
                            Lists
                        </li>
                        </Link>
                        <li className="sidebarListItems">
                            <Assessment className='sidebarIcons' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems ">
                            <Email className='sidebarIcons' />
                            Mail
                        </li>
                        <li className="sidebarListItems">
                            <RateReview className='sidebarIcons' />
                            Feedaback
                        </li>
                        <li className="sidebarListItems">
                            <Forum className='sidebarIcons' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems ">
                            <ManageAccounts className='sidebarIcons' />
                            Manage
                        </li>
                        <li className="sidebarListItems">
                            <Report className='sidebarIcons' />
                            Reports
                        </li>
                        <li className="sidebarListItems">
                            <Timeline className='sidebarIcons' />
                            Analytics
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
