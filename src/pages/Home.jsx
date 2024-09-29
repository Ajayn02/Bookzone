import React from 'react'
import Add from '../components/Add'
import TableData from '../components/TableData'

function Home() {
  return (
    <>
        <div className='home' style={{margin:"50px 0px"}}>
          <h2>Add Books</h2>
            <Add/>
            <div className='d-flex justify-content-center align-items-center    rounded tab-div'>
                <TableData/>
            </div>
        </div>
     
    </>
  )
}

export default Home