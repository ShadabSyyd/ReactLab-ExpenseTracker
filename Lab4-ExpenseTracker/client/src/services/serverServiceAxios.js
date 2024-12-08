import axios from "axios"

const getAllExpenseitems =async ()=>{
    const mainURL="http://localhost:4000/expensiva";

    const getDetails=await axios.get(mainURL);
    return getDetails.data;
}

const postMCreateExpenseItems=async (newExpenseItem)=>{
    const postURL="http://localhost:4000/expensiva";

    const response= await axios.post(postURL, newExpenseItem, {
        headers: {
            'Content-Type':'application/json'
        }
    });
    return response.data;
}
export {getAllExpenseitems, postMCreateExpenseItems}

