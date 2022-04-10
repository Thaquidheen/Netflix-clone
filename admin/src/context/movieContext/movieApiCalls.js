import { createMovieFailure, createMovieStart, createMovieSuccess, DeleteMovieFailure, DeleteMovieStart, DeleteMovieSuccess, getMovieFailure, getMovieStart, getMovieSuccess, updateMovieFailure, updateMovieStart, updateMovieSuccess } from "./movieAction"
import axios from 'axios';


export const getMovies =async (dispatch)=>{
    dispatch(getMovieStart())
    try{
   const res = await axios.get('/movies/',{headers:{token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken}})
    dispatch(getMovieSuccess(res.data))
}catch(err){
       dispatch(getMovieFailure());
    }
}

export const createMovies =async (movie,dispatch)=>{
    dispatch(createMovieStart())
    try{
   const res = await axios.post('/movies',movie,{headers:{token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken}})
    dispatch(createMovieSuccess(res.data))
}catch(err){
       dispatch(createMovieFailure());
    }
}

export const updateMovies =async (id,dispatch)=>{
    dispatch(updateMovieStart())
    try{
   const res = await axios.put('/movies/'+id,{headers:{token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken}})
    dispatch(updateMovieSuccess(res.data))
}catch(err){
       dispatch(updateMovieFailure());
    }
}



export const deleteMovies =async (id,dispatch)=>{
    dispatch(DeleteMovieStart())
    try{
    await axios.delete('/movies/'+id,{headers:{token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken}})
    dispatch(DeleteMovieSuccess(id))
}catch(err){
       dispatch(DeleteMovieFailure());
    }
}
