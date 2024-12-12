
const getAllPayeeName = (getAllExpenseitemsii) => {
    const allPayeeNameFetched = [];

    getAllExpenseitemsii.forEach((getAllExpenseitem) => {
        const payeeNameFetched = getAllExpenseitem.payeeName;

        if (!allPayeeNameFetched.includes(payeeNameFetched)) {
            allPayeeNameFetched.push(payeeNameFetched);
        }

        // allPayeeNameFetched.push(payeeNameFetched);

    })
    return allPayeeNameFetched;
}

const getGrandTotal = (getAllExpenseitem2) => {
    let grandTotal = 0;
    getAllExpenseitem2.forEach((fetchedData) => {
        grandTotal = grandTotal + fetchedData.price;
        console.log(fetchedData.price);
    });
    return grandTotal;

}

const getTotalExpenseByPayee=(getAllExpenseitem2,payeeName1)=>{
    let totalExpense= 0;
    getAllExpenseitem2.forEach((individualData)=>{
        if(individualData.payeeName===payeeName1){
            totalExpense=totalExpense+individualData.price;
        }
    });
    return totalExpense;
}

const gettingPendingAmt=(getAllExpenseitem2, payeeName1)=>{
    // ram=1000
    //Rahul = 200
    // forEach= 1200/NoOFpayee(2)
    // each= 600

    const totalExpense= getGrandTotal(getAllExpenseitem2);
    const toalExpenseByPayee= getTotalExpenseByPayee(getAllExpenseitem2, payeeName1);
    const halfAmount= (totalExpense/2);

    if(toalExpenseByPayee>=halfAmount){
        return 0;
    }else{
        return (halfAmount-toalExpenseByPayee);
    }

    
}

export { getAllPayeeName, getGrandTotal, getTotalExpenseByPayee, gettingPendingAmt};