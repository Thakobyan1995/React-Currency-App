import React from 'react';
import PropTypes from 'prop-types'
import './Loading.css';

const Loading = ({ height, width }) => {
    return <div className="Loading" style={{width, height}}></div>
}


Loading.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
}

Loading.defaultProps = {
    width: '56px',
    height: '56px'
}

export default Loading