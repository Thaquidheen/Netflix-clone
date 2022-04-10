import './products.css'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline, PartyModeSharp} from '@mui/icons-material';
import {Link, useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import { MovieContext } from '../../context/movieContext/movieContext';
import { useEffect } from 'react';
import { deleteMovies, getMovies } from '../../context/movieContext/movieApiCalls';
const Products = () => {
   const navigate=useNavigate()
  
     const toUpdate=(id,movie)=>{
       navigate('/product/'+id,{state:{movie}})
     }
    const {movies,dispatch}=useContext(MovieContext)
   
    useEffect(()=>{
    getMovies(dispatch)
    },[dispatch])


    

   
 const handleDelete = (id)=>{
  deleteMovies(id,dispatch)
 }
    const columns = [
        { field: '_id', headerName: 'ID', width: 230 },
        { field: 'movie', headerName: 'movie', width: 200, renderCell : (params) =>{
          return(
            <div className='productListUser'>
              <img className='productListImg' src={params.row.img} alt="" />
              {params.row.title}
            </div>
          )
        } },
        { field: 'genre', headerName: 'GENRE',  width: 100  },
        { field: 'year', headerName: 'year',  width: 100  },
        { field: 'limit', headerName: 'Limit',  width: 100  },
        { field: 'isSeries', headerName: 'isSeries',  width: 100  },
       
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell : (params) =>{
            return (
              <>
              <a  onClick={()=>{toUpdate(params.row._id,params.row)}}>
              <button className="productListEdit">Edit</button>
              </a >
              <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row._id)} />
              </>
            )
          }
        },
        
      ];
    return (
      <>
        <div className='products'>
               <DataGrid
           disableSelectionOnClick
        rows={movies}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
        </div>
        <div>
          <Link to="/newProduct">
          <button>create </button>
          </Link>
        </div>
        </>
    );

    
}

export default Products;
