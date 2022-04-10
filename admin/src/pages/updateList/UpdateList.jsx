import './updateList.css';
import {Link, useLocation} from 'react-router-dom';


import { useContext, useState } from 'react';

import { ListContext } from '../../context/listContext/listContext';
const UpdateLists = () => {

const location =useLocation()
const list=location.state.list




const {dispatch}=useContext(ListContext)










    return (
        <div className='productUpdate' >
             <div className="productTitleContainer">
                 <h3 className="productTitle">List</h3>
                 <Link to="/newLists" >
                 <button className="productTitleCreate">Create</button>
                 </Link>
                 
             </div>
             <div className="productTop">
                
                 <div className="productTopRight">
                     <div className="productInfoBottom">
                           <div className="productInfoItem">
                               <span className="productInfoId">id:</span>
                               <span className="productInfoValue" >{list._id}</span>
                           </div>
                           <div className="productInfoItem">
                               <span className="productInfoId">Genre:</span>
                               <span className="productInfoValue">{list.genre}</span>
                           </div>
                           <div className="productInfoItem">
                               <span className="productInfoId">Type:</span>
                               <span className="productInfoValue">{list.type}</span>
                           </div>
                     </div>
                 </div>
             </div>
             <div className="productBottom">
                 <form action="" className="productForm">
                     <div className="productFormLeft">
                         <label >List Title</label>
                         <input type="text" placeholder={list.title} id="title" name="title" />
                         <label >Genre</label>
                         <input type="text" placeholder={list.genre}  id="genre" name="genre" />
                         <label >Type</label>
                         <input type="text" placeholder={list.type} id="type" name="type" />
                    
                       
                     </div>
                 </form>
             </div>
        </div>
    );
}

export default UpdateLists;
