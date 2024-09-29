import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
   <>
     <Navbar className=" p-2 bg-light" >
        <Container>
          <Navbar.Brand href="#home" className='' style={{fontSize:"28px"}}>
          <i className="fa-solid fa-book" style={{color: "rgb(94, 81, 237)",}} />
          {" "}
         <b> Bookzone</b>
          </Navbar.Brand>
          <button className='btn py-2' style={{border:"1px solid black",borderRadius:"20px"}}>
        <i className="fa-solid fa-user fa-lg " style={{color: "#0e2958",}} />
        </button>
        </Container>
        
      </Navbar>
   </>
  )
}

export default Header