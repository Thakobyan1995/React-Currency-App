import React from 'react';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currencies: [],
            error: false
        }
    }

    componentDidMount() {
        
    }

    render() {
        const { loading } = this.state;
        if(loading) {
            return <div>Loading...</div>
        }
        return (
            <div>Text</div>
        )
    }
}

export default List;