import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { addBooks } from '../slices/bookSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

function Add() {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState({
        id: "", title: "", category: "", quantity: "", price: ""
    })
    const dispatch = useDispatch()
    // console.log(input)

    const handleUpload = () => {
        const { id, title, category, quantity, price, url  } = input
        if (!id || !title || !category || !quantity || !price || !url) {
            toast.error("Enter Valid Inputs")
        } else {
            dispatch(addBooks(input))
            handleClose()
            setInput({ id: "", title: "", category: "", quantity: "", price: "",url:"" })
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className='btn btn-success mb-4' onClick={handleShow}>Add+</button>


            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton className='bg-light'>
                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-light'>


                    <FloatingLabel controlId="id" label="ID" className="mb-3">
                        <Form.Control type="number" placeholder="" onChange={(e) => { setInput({ ...input, id: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="Title" label="Title" className="mb-3">
                        <Form.Control type="text" placeholder="" onChange={(e) => { setInput({ ...input, title: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="url" label="Image URL" className="mb-3">
                        <Form.Control type="text" placeholder="" onChange={(e) => { setInput({ ...input, url: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="category" label="Category" className="mb-3">
                        <Form.Control type="text" placeholder="" onChange={(e) => { setInput({ ...input, category: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="quantity" label="Quantity" className="mb-3">
                        <Form.Control type="number" placeholder="" onChange={(e) => { setInput({ ...input, quantity: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="price" label="Price" className="mb-3">
                        <Form.Control type="number" placeholder="" onChange={(e) => { setInput({ ...input, price: e.target.value }) }} />
                    </FloatingLabel>



                </Modal.Body>
                <Modal.Footer className='bg-light'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpload}>Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add