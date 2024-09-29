import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { updateData } from '../slices/bookSlice';
import toast from 'react-hot-toast';

function Edit({ data }) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    const [val, setVal] = useState({
        id: "", title: "", category: "", quantity: "", price: "", url: ""
    })

    // console.log(data)
    // console.log(val);
    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true)
        setVal({ ...val, id: data.id, title: data.title, category: data.category, quantity: data.quantity, price: data.price, url: data.url })
    }

    const handleUpdate = () => {
       
        const { id, title, category, url, quantity, price } = val
        if (!id || !title || !category || !url || !quantity || !price) {
            toast.error("Enter Valid Inputs")
        } else {
            handleClose()
            dispatch(updateData(val))
            setVal({ id: "", title: "", category: "", quantity: "", price: "", url: "" })
        }

    }


    return (
        <>
            <button className='btn' onClick={handleShow}>
                <i className="fa-regular fa-pen-to-square fa-xl" />
            </button>


            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FloatingLabel controlId="Title" label="Title" className="mb-3">
                        <Form.Control type="text" placeholder="" value={val.title} onChange={(e) => { setVal({ ...val, title: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="category" label="Category" className="mb-3">
                        <Form.Control type="text" placeholder="" value={val.category} onChange={(e) => { setVal({ ...val, category: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="url" label="Image URL" className="mb-3">
                        <Form.Control type="url" placeholder="" value={val.url} onChange={(e) => { setVal({ ...val, url: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="quantity" label="Quantity" className="mb-3">
                        <Form.Control type="number" placeholder="" value={val.quantity} onChange={(e) => { setVal({ ...val, quantity: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="price" label="Price" className="mb-3">
                        <Form.Control type="number" placeholder="" value={val.price} onChange={(e) => { setVal({ ...val, price: e.target.value }) }} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit