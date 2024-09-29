import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function View() {

  const { id } = useParams()
  const { books } = useSelector((state) => state.bookReducer)

  const currentData = books.filter((item) => item.id == id)
  // console.log(currentData);
  

  return (
    <>
      <section className="py-5">
        {
          currentData &&
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img className="card-img-top mb-5 mb-md-0 rounded" src={currentData[0].url} alt="..."  height={"350px"} width={"300px"} /></div>
              <div className="col-md-6">
                <div className="small mb-1">ID : {currentData[0].id}</div>
                <h1 className="display-5 fw-bolder">{currentData[0].title}</h1>
                <div className="fs-5 mb-3 ">
                  <span>{currentData[0].category}</span>
                </div>

                <div className='d-flex flex-column'>
                  <span>Price : ₹{currentData[0].price}</span>
                  <span>Quantity : {currentData[0].quantity}</span>
                </div>

              </div>
            </div>
          </div>
        }

      </section>



    </>
  )
}

export default View