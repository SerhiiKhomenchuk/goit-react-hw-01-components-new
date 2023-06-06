import { Table } from "./TransactionHistory.styled";
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    console.log(items);
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
                    <td style={{backgroundColor:idx%2!==0? 'antiquewhite' : 'white'}}>{type}</td>
                    <td style={{backgroundColor:idx%2!==0? 'antiquewhite' : 'white'}}>{amount}</td>
                    <td style={{backgroundColor:idx%2!==0? 'antiquewhite' : 'white'}}>{currency}</td>
                </tr>
            })}
        </tbody>
    </Table>
}

TransactionHistory.propTypes = {
    items:PropTypes.arrayOf(PropTypes.object)
}