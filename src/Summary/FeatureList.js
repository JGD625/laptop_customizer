import React, { Component } from 'react';
import './FeatureList.css';

class FeatureList extends Component {
render() {
    return(
        <ul className="feature__list">
              { options }
            </ul>
    )
}
}

export default FeatureList;