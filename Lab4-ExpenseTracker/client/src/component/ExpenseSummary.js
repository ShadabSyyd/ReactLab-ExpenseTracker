import { Table } from "react-bootstrap";
import { getAllPayeeName, getGrandTotal, getTotalExpenseByPayee, gettingPendingAmt } from "../services/expenses-utils"

const ExpenseSummary = ({expenseItems2}) => {
    const payeeNamesp=getAllPayeeName(expenseItems2)
    function expenseSummaryTable() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Payee</th>
                        <th>Total Contributed Amount</th>
                        <th>Pending Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payeeNamesp.map((payeeName, index) => {
                            return (
                                <tr>
                                    <td>{index +1}</td>
                                    <td>{payeeName}</td>
                                    <td>{getTotalExpenseByPayee(expenseItems2, payeeName)}</td>
                                    <td>{gettingPendingAmt(expenseItems2, payeeName)}</td>
                                </tr>
                            );
                        })
                    }
                    <tr>
                        <td></td>
                        <td>Grand Total</td>
                        <td>{getGrandTotal(expenseItems2)}</td>
                        <td>{gettingPendingAmt(expenseItems2, payeeNamesp)}</td>
                    </tr>
                </tbody>
            </Table>
        );
    }

    return (
        <div>
            <h2>
                Expense Summary
            </h2>
            {
                expenseSummaryTable()
            }

        </div>
    )
}

export { ExpenseSummary };