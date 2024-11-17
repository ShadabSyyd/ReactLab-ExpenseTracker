import {getAllExpenseitems} from "../services/serverServiceAxios";
import { useEffect } from "react";
import {useState} from "react";
import {Container} from "react-bootstrap";
import { ExpenseItemsLister } from "./expenseItemsLister";
import { ExpenseCreator } from "./ExpenseCreator";

const ExpTracHome= ()=>{
    const [exxpItems, setExpenseItems]=useState([]);

    useEffect(()=>{
        const getExpenseItemsInvoker= async ()=>{
            const fetchedResults= await getAllExpenseitems();
            console.log("service axiom Item Fetched");    
            console.log(JSON.stringify(fetchedResults));
            setExpenseItems(fetchedResults);
        };
        getExpenseItemsInvoker();
    },[]
    )
 
    return(
        <Container>
            <h2>Expense Tracker App Main</h2>
            <ExpenseCreator></ExpenseCreator>
            <hr/>
            <ExpenseItemsLister expItems={exxpItems}></ExpenseItemsLister>
        </Container> 
    );
};

export {ExpTracHome};
