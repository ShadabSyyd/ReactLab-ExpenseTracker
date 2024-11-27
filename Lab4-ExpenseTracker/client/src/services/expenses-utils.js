
const getAllPayeeName=(getAllExpenseitemsii)=>{
    const allPayeeNameFetched=[];

    getAllExpenseitemsii.forEach((getAllExpenseitem)=>{
        const payeeNameFetched=getAllExpenseitem.payeeName;
        
        if (!allPayeeNameFetched.includes(payeeNameFetched)){
            allPayeeNameFetched.push(payeeNameFetched);
        }

        // allPayeeNameFetched.push(payeeNameFetched);
        
    })


    return allPayeeNameFetched;


}   

export {getAllPayeeName};
