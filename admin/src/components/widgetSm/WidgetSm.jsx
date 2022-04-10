import './widgetSm.css';
import { Visibility } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const WidgetSm = () => {

    const [newUsers, setNewUsers] = useState([])

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get('/users?new=true', { headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjExOGI3ZmIyYTRhMzVjNWJjYjBhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTMyMDgwOSwiZXhwIjoxNjQ5NzUyODA5fQ.4yux9IJNCTgWVOcTfvkVbfTIcRUaje6L4wodpf9MGws" } })
                setNewUsers(res.data)
            } catch (err) {
                console.log(err)
            }
        }; getNewUsers();
    }, [])
    console.log(newUsers);


    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>



            <ul className="widgetSmList">
                {newUsers.map((user) => (
                    <li className="widgetSmListItems">
                        <img src={user.profilePic || "https://i.pinimg.com/736x/bd/ee/4c/bdee4c328550aaf21aa9f43fd19e2136.jpg"} className='widgetSmImg' alt="" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUserName">{user.username}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className='widgetSmIcon' />
                            Display
                        </button>
                    </li>
                ))}



            </ul>
        </div>
    );
}

export default WidgetSm;
