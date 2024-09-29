import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { deleteData } from '../slices/bookSlice'
import Edit from './Edit'

function TableData() {

    const {books}=useSelector((state)=>state.bookReducer)
    const dispatch=useDispatch()

  return (
   <>
        <div className='container'>
            {
                books?.length>0 ?
                <Table responsive striped bordered hover className='w-100 text-center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books?.map(item=>(
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.quantity}</td>
                            <td>₹ {item.price}</td>
                            <td>
                                <Link to={`/view/${item.id}`} className='btn btn-outline-success'>View</Link>
                            </td>
                            <td>
                               <Edit data={item}/>
                            </td>
                            <td>
                                <button className='btn' onClick={()=>{dispatch(deleteData(item.id))}}>
                                   <i className="fa-solid fa-trash fa-xl" style={{color: "#98060e",}} />
                                </button>
                            </td>
                        </tr>
                        ))
                    }
                   
                </tbody>
             </Table>
             :
             <h3 className='text-center'>No Data Added Yet !!</h3>
            }
            
        </div>

        {/* edit modal */}

   </>
  )
}

export default TableData