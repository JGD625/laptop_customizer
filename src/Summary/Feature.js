import React, { Component } from 'react';
import './Feature.css';
import List from './List';
import ListItem from './ListItem';

class Feature extends Component{
    render() {
        const features = Object.keys(this.props.features)
        .map(key => {
          const options = this.props.features[key].map((item, index) => {
            const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return <ListItem />
          });
          return  <div className="feature" key={key}>
            <div className="feature__name">{key}</div>
            <FeatureList />
          </div>
          <div>
            <List />
          </div>
        
       })
       
      };  
       }
       

          export default Feature;
