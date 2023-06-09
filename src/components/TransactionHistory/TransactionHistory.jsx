import { Table } from "./TransactionHistory.styled";
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    
    return <Table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({ currency, amount, type, id},idx) => {
                return <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            })}
        </tbody>
    </Table>
}

TransactionHistory.propTypes = {
    items:PropTypes.arrayOf(
        PropTypes.shape({
        currency:PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        })
    ).isRequired,
}