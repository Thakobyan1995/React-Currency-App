import React from 'react';
import fetchServise from '../../services/Fetch-service';
import Loading from '../loading/Loading';
import { withRouter } from 'react-router-dom'
import {debounce} from '../../helpers/debounce'
import './Search.css';


class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchQuery: '',
            searchResults: [],
            loading: false
        }
    }

    handleChange = async event => {
        const { value } = event.target
        this.setState({
            searchQuery: value,
        })

        if(!value) {
            return null;
        }
        this.setState({
            loading: true
        })

        this.fetchData(value)
    }

    fetchCurrencies = async value => {
        const response = await fetchServise.get(`autocomplete?searchQuery=${value}`);
        this.setState({
            searchResults: response,
            loading: false
        })
    }

    componentDidMount() {
        this.fetchData = debounce((value)=> this.fetchCurrencies(value), 1000)
    }

    handleRedirect = (currencyId) => {
        this.props.history.push(`/currency/${currencyId}`)
        this.setState({
            searchQuery: '',
            searchResults: []
        })
    }

    

    renderSearchResults = () => {
        const { loading, searchQuery, searchResults} = this.state
        if(!searchQuery) {
            return ''
        }
        if(searchResults.length > 0) {
            return (
                <div className="Search-result-container">
                    {searchResults.map(result => (
                        <div
                            key={result.id}
                            className="Search-result"
                            onClick={() => this.handleRedirect(result.id)}
                            >
                            {result.name} ({result.symbol})
                        </div>
                ))}
                </div>
            )
        }
        if(!loading) {
            return (
                <div className="Search-result-container">
                    <div className="Search-no-result">
                         No results found.
                    </div>
                </div>
            )
        }
        
    }

    

    render() {

        const { searchQuery, loading } = this.state;
        return (
            <div className="Search">
                <span className="Search-icon" />
                    <input
                        className="Search-input"
                        value={searchQuery}
                        type="text"
                        placeholder="Currency name"
                        onChange={this.handleChange}
                    />
                    {
                        loading && 
                        <div className="Search-loading">
                        <Loading width="12px" height="12px"/>
                        </div>
                    }
                    {this.renderSearchResults()}
            </div>
        )
    }
}

export default withRouter(Search) 

