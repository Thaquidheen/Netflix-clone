import { useContext, useState } from 'react';
import './newProduct.css';
import storage from '../../firebase';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MovieContext } from '../../context/movieContext/movieContext';
import { createMovies } from '../../context/movieContext/movieApiCalls';

const Newproduct = () => {
    const [movie,setMovie]=useState(null)
    const [img,setImg] = useState(null)
    const [imgTitle,setImgTitle] = useState(null)
    const [imgSm,setImgSm] = useState(null)
    const [trailer,setTrailer] = useState(null)
    const [video,setVideo] = useState(null)
    const [uploaded,setUploaded] =useState(0)

const {dispatch}=useContext(MovieContext)



const handleChange = (e)=>{
    const value1=e.target.value;
    setMovie({...movie,[e.target.name]:value1})
}

console.log(movie)
 

  
    const upload = (items) => {
        items.forEach((item) => {
          const fileName = new Date().getTime() + item.label + item.file.name;
          const storageRef = ref(storage,`/items/${fileName}`);
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
                setMovie((prev) => {
                  return { ...prev, [item.label]: url };
                });
                setUploaded((prev) => prev + 1);
              });
            }
          );
        });
      };

 


  

const handleUpload = (e)=>{
    e.preventDefault();
   upload([
       {file: img, label:"img"},
       {file: imgTitle, label:"imgTitle"},
       {file: imgSm, label:"imgSm"},
       {file: trailer, label:"trailer"},
       {file: video, label:"video"}
   ]);
};



const handleSubmit = (e)=>{
    e.preventDefault();
    createMovies(movie,dispatch)
}




console.log(movie);
    return (
        <div className='newproduct' >
             <h1 className="newProductTitle">New Movie</h1>
            <form action="" className="newProductForm">
                <div className="newProductItem">
                    <label >Image</label>
                    <input type="file" id='img'  onChange={(e)=>setImg(e.target.files[0])} />
                </div>
                <div className="newProductItem">
                    <label >Title Image</label>
                    <input type="file" id='imgTitle' onChange={(e)=>setImgTitle(e.target.files[0])}   />
                </div>
                <div className="newProductItem">
                    <label >Thumbnail Image</label>
                    <input type="file" id='imgSm' name='imgSm'  onChange={(e)=>setImgSm(e.target.files[0])}  />
                </div>
                <div className="newProductItem">
                    <label >Title</label>
                    <input type="text" placeholder='John Wick' name='title' onChange={handleChange}/>
                </div>
                <div className="newProductItem">
                    <label >Descriptiom</label>
                    <input type="text" placeholder="description" name='desc' onChange={handleChange}/>
                </div>
                <div className="newProductItem">
                    <label >Year</label>
                    <input type="text" placeholder="year" name='year' onChange={handleChange}/>
                </div>
                <div className="newProductItem">
                    <label >Genre</label>
                    <input type="text" placeholder="Genre" name='genre' onChange={handleChange}/>
                </div>
                <div className="newProductItem">
                    <label >Duration</label>
                    <input type="text" placeholder="duration" name='duration' onChange={handleChange}/>
                </div>
                <div className="newProductItem">
                    <label >Limit</label>
                    <input type="text" placeholder="duration" name='limit' onChange={handleChange}/>
                </div>
                <div className="newProductItem">
                    <label htmlFor="">isSeries?</label>
                    <select name="isSeries" className='newUserSelect' id="isSeries" onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">yes</option>
                    </select>
                </div>
                <div className="newProductItem">
                    <label >Trailer</label>
                    <input type="file" id='trailer' name="trailer" onChange={(e)=>setTrailer(e.target.files[0])} />
                </div>
                <div className="newProductItem"> 
                    <label >Video</label>
                    <input type="file" id='video' name="video"  onChange={(e)=>setVideo(e.target.files[0])} />
                </div>
      { uploaded ===5 ? ( <button className="newProductButton" onClick={handleSubmit}>Create</button>) :
           ( <button className="newProductButton" onClick={handleUpload}>Upload</button>)
      }         
           
            </form>
        </div>
    );
    }

export default Newproduct;
