import React from 'react'
import { Row, Col } from 'react-bootstrap'
import "./landing.css"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div className='container-fluid a1' style={{ minHeight: "90vh" }}>
        <Row >
          <Col md={6} className='c1' style={{ backgroundImage: "none" }}>
            <h1>Organize Your Shelf</h1>
            <div style={{ textAlign: "justify" }}>
              <p>Stay on top of your reading list with <b>Bookzone</b>, a comprehensive book management app. Track your books, authors, and genres, and discover new titles to enjoy. Easily search, sort, and filter your collection, and access it anywhere, anytime.</p>
            </div>
            <Link to={'/home'} className='btn b1'>Let's Start . . .</Link>
          </Col>
        </Row>
      </div>

      {/* section-2 */}
      <div className='container' style={{marginTop:"50px", marginBottom:"50px",minHeight:"80vh"}}>
        <h2 className='text-center my-5'>Features</h2>
        <div className='row d-flex  align-items-center' style={{justifyContent:"space-evenly"}}>

          <Card style={{ width: '18rem',marginTop:"30px" }} className='border shadow'>
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/library-concept-illustration_114360-2733.jpg?t=st=1727606238~exp=1727609838~hmac=0f2785799e2bc2c2bc79d8e9c792ed24e63ef7a8ff01d7a574cf89c3f15dfdf8&w=826" width={"100%"} />
            <Card.Body className='text-center'>
              <Card.Title>Book Tracking</Card.Title>
              <Card.Text style={{textAlign:"justify"}}>
              Easily track and organize your book collection by scanning barcodes, searching titles, or manually adding books. Access your library anywhere, anytime.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem',marginTop:"30px" }} className='border shadow'>
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/young-lady-student-reading-book-studying-interior-library-woman-sitting-desk-shelves-bookcase-full-books-flat-vector-illustration-education-knowledge-readers-club-concept_74855-21149.jpg?t=st=1727606169~exp=1727609769~hmac=cbe4961368cbf9f5a635d396b7cfc78666a54f86acd83053f5a9ad5c7bf29b64&w=826" width={"100%"} />
            <Card.Body className='text-center'>
              <Card.Title>Discovery and Recommendations</Card.Title>
              <Card.Text style={{textAlign:"justify"}}>
              Discover new books, authors, and genres with our recommendation engine, based on reading history , preferences
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem',marginTop:"30px" }} className='border shadow'>
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/school-library-concept-illustration_114360-20374.jpg?t=st=1727606210~exp=1727609810~hmac=cb5fc278266517606b26aa102d11b6a18dfa3ac6a0b918fe79937bc5d12f912d&w=826" width={"100%"} />
            <Card.Body className='text-center'>
              <Card.Title>Reading Insights</Card.Title>
              <Card.Text style={{textAlign:"justify"}}>
              Track your reading progress, set goals, and gain insights into your reading habits. View statistics on books read, pages turned, and time spent reading.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>
    </>
  )
}

export default Landing