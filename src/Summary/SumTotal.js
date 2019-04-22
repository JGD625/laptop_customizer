import React from 'react'
import './SumTotal.css'

class SumTotal extends Component {
    return(
        <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(props.total) }
              </div>
            </div>
    )
}

export default SummaryTotal;