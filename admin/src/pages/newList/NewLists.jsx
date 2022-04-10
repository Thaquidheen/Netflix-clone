import { useContext, useEffect, useState } from 'react';
import './newList.css';


import { createMovies, getMovies } from '../../context/movieContext/movieApiCalls';
import { ListContext } from '../../context/listContext/listContext';
import { MovieContext } from '../../context/movieContext/movieContext';
import { createLists } from '../../context/listContext/listApiCalls';
import { useHref, useNavigate } from 'react-router-dom';

const Newproduct = () => {
    const [list,setList]=useState(null)
const history = useNavigate()

    const {dispatch}=useContext(ListContext)
    const {movies,dispatch:dispatchMovie}=useContext(MovieContext)

useEffect(()=>{
  getMovies(dispatchMovie)
},[dispatchMovie]);







const handleChange = (e)=>{
    const value1=e.target.value;
    setList({...list,[e.target.name]:value1})
}
const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions,(option)=>option.value)
    setList({ ...list, [e.target.name]: value });
  }

const handleSubmit = (e)=>{
    e.preventDefault();
    createLists(list,dispatch)
    history('/lists')
}


console.log(list);
    return (
        <div className='newproduct' >
             <h1 className="newProductTitle">New Lists</h1>
            <form action="" className="newProductForm">
                <div className="newProductItem">
                    <label >Title</label>
                    <input type="text" placeholder='John Wick' name='title' onChange={handleChange}/>
                </div>
                <div className="newProductItem">
                    <label >Genre</label>
                    <input type="text" placeholder="description" name='genre' onChange={handleChange}/>
                </div>
                <div className="newProductItem">
                    <label >Type</label>
                   <select name='type' onChange={handleChange} >
                   <option >Type</option>
                   <option value='movie'>Movie</option>
                       <option  value='series' >Series</option>                 
                   </select>
                </div>
                <div className="newProductItem">
                    <label >Content</label>
                   <select  multiple name='content' onChange={handleSelect} style={{height:"300px"}}>
                   {
                   movies.map((movie)=>(
                         <option key={movie._id} value={movie._id}>{movie.title}</option>
                
                   ))
                      
                       }
                   </select>
                </div>
      <button className="newProductButton" style={{height:"50px"}} onClick={handleSubmit}>Create</button>
     
            
           
            </form>
        </div>
    );
    }

export default Newproduct;
