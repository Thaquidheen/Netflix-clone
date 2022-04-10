import './list.css';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline, PartyModeSharp} from '@mui/icons-material';
import { useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';

import { useEffect } from 'react';

import { ListContext } from '../../context/listContext/listContext';
import { deleteLists, getList } from '../../context/listContext/listApiCalls';
const Lists = () => {
   const navigate=useNavigate()
     const toUpdate=(id,list)=>{
       navigate('/updateLists/'+id,{state:{list}})
     }
    const {lists,dispatch}=useContext(ListContext)
   
    useEffect(()=>{
    getList(dispatch)
    },[dispatch])


    

   
 const handleDelete = (id)=>{
  deleteLists(id,dispatch)
 }
    const columns = [
        { field: '_id', headerName: 'ID', width: 230 },
        { field: 'title', headerName: 'Title',  width: 250  },
        { field: 'genre', headerName: 'genre',  width: 100  },
        { field: 'type', headerName: 'Type',  width: 100  },
       
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
        <div className='products'>
               <DataGrid
           disableSelectionOnClick
        rows={lists}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
        </div>
    );
}

export default Lists;
