import React from 'react'
import renderChangePercent from '../../helpers/renderChangePercent'
import { withRouter } from 'react-router-dom'
import WithCurrencies from '../../HOC/withCurrenices'

const TableBody = ({ currencies, history }) => {
    return (
        <tbody className="Table-body">
            {currencies.map((currency) => (
                <tr key={currency.id} onClick={() => history.push(`/currency/${currency.id}`)}>
                    <td>
                        <span className="Table-rank">{currency.rank}</span>
                        {currency.name}
                    </td>
                    <td>
                        <span className="Table-dollar">$ </span>
                        {currency.price}
                    </td>
                    <td>
                        <span className="Table-dollar">$ </span>
                        {currency.marketCap}
                    </td>
                    <td>
                        {renderChangePercent(currency.percentChange24h)}
                    </td>
                </tr>
            ))}
        </tbody>    
    )
    }

export default withRouter(WithCurrencies(TableBody)); 