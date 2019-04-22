import React, { Component } from 'react';
import './Summary.css';
import SummaryItem from './SummaryItem';
import SumTotal from './SumTotal'

class Summary extends Component{
    
    
     render() {
    
    const total = Object.keys(this.props.selected)
    .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);  

    const summary = Object.keys(this.props.selected)

    .map((key, index) => 
            <div key={index}>
              <SummaryItem cost={this.props.selected[key].cost} name={this.props.selected[key].name} typeName={key} />
            </div>
          )
    
        return(
        <div>
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
              {summary}
              {summary}
            <SumTotal total={total} />
          </section>
        </div>
    
        )
      }
    }
    
    
    
export default Summary;