import './newUser.css';

const Newuser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label >Username</label>
                    <input type="text" placeholder='thaqu'/>
                </div>
                <div className="newUserItem">
                    <label >Fullname</label>
                    <input type="text" placeholder='thaquidheen'/>
                </div>
                <div className="newUserItem">
                    <label >Email</label>
                    <input type="email" placeholder='thaquidheen@gmail.com'/>
                </div>
                <div className="newUserItem">
                    <label >Password</label>
                    <input type="text" placeholder='passsword'/>
                </div>
                <div className="newUserItem">
                    <label >Phone</label>
                    <input type="text" placeholder='9656403561'/>
                </div>
                <div className="newUserItem">
                    <label >Address</label>
                    <input type="text" placeholder='India | Kerala'/>
                </div>
                <div className="newUserItem">
                    <label >Gender</label>
                    <div className="genderContainer">
                    <input type="radio" name='gender' id='male' value="male"/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name='gender' id='female' value="female"/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name='gender' id='other' value="other"/>
                    <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Active</label>
                    <select name="active" className='newUserSelect' id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
               
                <button className="newUserButton">Create</button>
                
                
            </form>
        </div>
    );
}

export default Newuser;
