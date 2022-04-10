import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import {userRows} from '../../dummyData';
import { useState } from 'react';
const Userlist = () => {
   
    const [data,setData] = useState(userRows)
    const handleDelete = (id)=>{
        setData(data.filter((value)=>value.id !== id));
    }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'User', headerName: 'user ', width: 200, renderCell : (params) =>{
      return(
        <div className='userListUser'>
          <img className='userListImg' src={params.row.avtar} alt="" />
          {params.row.Username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 200  },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },

    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell : (params) =>{
        return (
          <>
          <Link  to={"/user/"+params.row.id} >
          <button className="productListEdit">Edit</button>
          </Link >
          <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)} />
          </>
        )
      }
    },
  ];
  


    return (
        <div className='userList'  style={{ height: 400, width: '100%' }}>
           <DataGrid
           disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    );
}

export default Userlist;
