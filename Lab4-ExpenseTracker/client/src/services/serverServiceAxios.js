import axios from "axios"

const getAllExpenseitems =async ()=>{
    const mainURL="http://localhost:4000/expensiva";

    const getDetails=await axios.get(mainURL);
    return getDetails.data;
}

const postCreateExpenseItems=(newExpenseItem)=>{
    const postURL="http://localhost:4000/expensiva";

    axios.post(postURL, newExpenseItem, {
        headers: {
            'Content-Type':'application/json'
        }
    });
}
export {getAllExpenseitems, postCreateExpenseItems}