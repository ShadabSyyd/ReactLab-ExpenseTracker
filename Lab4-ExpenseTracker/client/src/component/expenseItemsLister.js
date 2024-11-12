import Table from 'react-bootstrap/Table';

const ExpenseItemsLister = ({ expItems }) => {
    function expenseItemsTable() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Payee</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expItems.map((expensItems, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{expensItems.expenseDescription}</td>
                                    <td>{expensItems.payeeName}</td>
                                    <td>{formatDate(expensItems.date)}</td>
                                    <td>{expensItems.price}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        );
    }

    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        const stringDate = dateObject.getDate() + "/" + (1+dateObject.getMonth()) 
        + "/" + dateObject.getFullYear(); //month object starts with 0

        return stringDate;

    }

    return (
        expenseItemsTable()
    )
};
export { ExpenseItemsLister }
