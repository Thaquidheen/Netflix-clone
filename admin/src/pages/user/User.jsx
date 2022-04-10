import './user.css';
import {CalendarToday, EmailOutlined, PermIdentity, PhoneAndroid, PlaceOutlined, Publish} from '@mui/icons-material';
import {Link} from 'react-router-dom';
const User = () => {
    return (
        <div className='user'>
        <div className="userTitleContainer">
            <h3 className="userTitle">Edit User</h3>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
            
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/06/24/cf9d675c-b1fe-11ea-953d-a7ecc5cbd229_image_hires_144326.jpg" alt="" className="userTopImg" />
               
                <div className="userShowTopTitle">
                    <span className="userShowUserName">Thaquidheen</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <span className="userShowInfoTitlr">AnnaBEch99</span>
                    </div>
                    <div className="userShowInfo">
                    <CalendarToday className='userShowIcon'/>
                    <span className="userShowInfoTitlr">10.12.2002</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <span className="userShowInfoTitlr">+919656403561</span>
                    </div>
                    <div className="userShowInfo">
                    <EmailOutlined className='userShowIcon'/>
                    <span className="userShowInfoTitlr">thaquidheen@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                    <PlaceOutlined className='userShowIcon'/>
                    <span className="userShowInfoTitlr">India | Kerala</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" 
                            placeholder='thaqu' 
                            className='userInputUpdate' ></input>
                        </div>
                   
                 
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" 
                            placeholder='thaquidheen' 
                            className='userInputUpdate' ></input>
                        </div>
                    
                  
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" 
                            placeholder='thaquidheen@gmail.cop' 
                            className='userInputUpdate' ></input>
                        </div>
                    
                   
                        <div className="userUpdateItem">
                            <label>Phone No</label>
                            <input type="text" 
                            placeholder='9656403561' 
                            className='userInputUpdate' ></input>
                        </div>
                  
                  
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" 
                            placeholder='India | Kerala' 
                            className='userInputUpdate' ></input>
                        </div>
                        </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/06/24/cf9d675c-b1fe-11ea-953d-a7ecc5cbd229_image_hires_144326.jpg" alt="" className="userUpdateImg" />
                        <label htmlFor="file"><Publish className='publishIcon' /></label>
                        <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                          <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default User;
