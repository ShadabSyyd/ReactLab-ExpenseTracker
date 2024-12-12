import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal"
// import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form"
import { getAllPayeeName } from "../services/expenses-utils";
import { useRef } from "react";
import { postMCreateExpenseItems } from "../services/serverServiceAxios";

const ExpenseCreator = ({expItemsII}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const payeeNameArray= getAllPayeeName(expItemsII);
    // console.log(expItemsII);

    const expenseDescRef=useRef(null);
    const payeeNameRef=useRef(null);
    const priceRef=useRef(null);
    const dateRef=useRef(null);
    
    const generateID=()=>{
        return Math.floor(Math.random() * 1000);
    }
    const handleNewExpenseCreation=async (event)=>{
        const expDescription1=expenseDescRef.current.value;
        const payeeName1= payeeNameRef.current.value;
        const price1= parseFloat(priceRef.current.value);
        const date1= new Date(dateRef.current.value);
        const newId= generateID();

        const mergingExpenseItemExpensiva={
            id: newId,
            expenseDescription: expDescription1,
            payeeName: payeeName1,
            price: price1,
            date: date1
        }
        
        const response= await postMCreateExpenseItems(mergingExpenseItemExpensiva);
        console.log("response is:"+ JSON.stringify(response));
        handleClose();
    }
    const formToAddDetails = () => {
        return (
            <Form onSubmit={handleNewExpenseCreation}>
                <Form.Group className="mb-3" controlId="expenseDescription">
                    <Form.Label>Expense Description</Form.Label>
                    <Form.Control type="Text" placeholder="Enter Description" ref={expenseDescRef}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="namePayee">
                    <Form.Label>Name</Form.Label>
                    <Form.Select aria-label="Default select example" ref={payeeNameRef}>
                        <option>Open this select menu</option>
                        {
                            payeeNameArray.map((pName)=>{
                                return(
                                    <option value={pName}>{pName}</option>
                                )
                            })
                        }

                        {/* <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option> */}
                    </Form.Select>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Purchased</Form.Label>
                    <Form.Control type="email" placeholder="Enter Description" />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group> */}

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter the price" ref={priceRef}/>
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="expenseDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="Date" ref={dateRef}/>
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }


    return (
        <div>
            <Button variant="primary" onClick={handleShow} className="float-end">
                Add New Expense
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {formToAddDetails()}
                </Modal.Body>
            </Modal>
        </div>

    );
};
export { ExpenseCreator };