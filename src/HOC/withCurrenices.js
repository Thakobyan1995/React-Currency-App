import React from 'react'
import CurrenciesContext from '../context/currencies'

const WithCurrencies = Component => {
    return () => {
        return (
            <CurrenciesContext.Consumer>
                {
                    currencies => (<Component currencies={currencies} />)
                }
            </CurrenciesContext.Consumer>
        )
    }
}

export default WithCurrencies;