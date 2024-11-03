import axios from "axios"

const getAllExpenseitems =async ()=>{
    const mainURL="http://localhost:4000/expensiva";
    
    const getDetails=await axios.get(mainURL);
    return getDetails.data;
}
export {getAllExpenseitems}