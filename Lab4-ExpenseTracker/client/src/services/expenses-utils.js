
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

export { getAllPayeeName };
