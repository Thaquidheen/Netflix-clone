import './updateProduct.css';
import {Link, useLocation} from 'react-router-dom';

import {Publish} from '@mui/icons-material';
import { useContext, useState } from 'react';
import storage from '../../firebase';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MovieContext } from '../../context/movieContext/movieContext';
import { updateMovies } from '../../context/movieContext/movieApiCalls';
const Updateproducts = () => {

const location =useLocation()
const movie=location.state.movie

const [updateMovie,setUpdatedMovie] = useState(null)
const [trailer,setTrailer]=useState(null)
const [video,setVideo]=useState(null)
const [uploaded,setUploaded] =useState(0)

const {dispatch}=useContext(MovieContext)

const handleChange = (e)=>{
    e.preventDefault();
    const value = e.target.value
   setUpdatedMovie({...updateMovie,[e.target.name]:value})

}


const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage,`/files/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUpdatedMovie((prev) => {
              return [{ ...prev, [item.label]: url }];
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

console.log(updateMovie)


  const handleUpload = (e)=>{
    e.preventDefault();
   upload([
       {file: trailer, label:"trailer"},
       {file: video, label:"video"}
   ]);
};


const handleSubmit = (e)=>{
    e.preventDefault();
    updateMovies(updateMovie,dispatch)
}


    return (
        <div className='productUpdate' >
             <div className="productTitleContainer">
                 <h3 className="productTitle">Movie</h3>
                 <Link to="/newProduct" >
                 <button className="productTitleCreate">Create</button>
                 </Link>
                 
             </div>
             <div className="productTop">
                
                 <div className="productTopRight">
                     <div className="productInfoTop">
                         <img src={movie.img} alt="" className='productInfoImage'  />
                     <span className="productInfoName">{movie.title}</span>
                     </div>
                     <div className="productInfoBottom">
                           <div className="productInfoItem">
                               <span className="productInfoId">id:</span>
                               <span className="productInfoValue" >{movie._id}</span>
                           </div>
                           <div className="productInfoItem">
                               <span className="productInfoId">Genre:</span>
                               <span className="productInfoValue">{movie.genre}</span>
                           </div>
                           <div className="productInfoItem">
                               <span className="productInfoId">Year:</span>
                               <span className="productInfoValue">{movie.year}</span>
                           </div>
                           <div className="productInfoItem">
                               <span className="productInfoId">Limit:</span>
                               <span className="productInfoValue">{movie.limit}</span>
                           </div>
                     </div>
                 </div>
             </div>
             <div className="productBottom">
                 <form action="" className="productForm">
                     <div className="productFormLeft">
                         <label >Movie Title</label>
                         <input type="text" placeholder={movie.title} id="title" name="title" onChange={handleChange}/>
                         <label >Year</label>
                         <input type="text" placeholder={movie.year} id="year" name="yaer" onChange={handleChange}/>
                         <label >Genre</label>
                         <input type="text" placeholder={movie.genre}  id="genre" name="genre" onChange={handleChange}/>
                         <label >Limit</label>
                         <input type="text" placeholder={movie.limit} id="limit" name="limit" onChange={handleChange}/>
                         <label >Trailer</label>
                         <input type="file" placeholder={movie.trailer}  onChange={(e)=>setTrailer(e.target.files[0])}/>
                         <label >Video</label>
                         <input type="file" placeholder={movie.video} onChange={(e)=>setVideo(e.target.files[0])}/>
                     </div>
                     <div className="productFormRight">
                         <div className="productUpload">
                             <img src={movie.img} alt="" className="productUploadImg" />
                             <label htmlFor="file">
                                <Publish className="publishIcon" />
                             </label>
                             <input type="file" id='file' style={{display:"none"}} />
                             
                         </div>
                         { uploaded === 2 ?
(<button className="newProductButton" onClick={handleSubmit} >Create</button>) : (<button className="newProductButton" onClick={handleUpload}>Uploaded</button>) 
}
            
                        
                     </div>
                     
                 </form>
             </div>
        </div>
    );
}

export default Updateproducts;
