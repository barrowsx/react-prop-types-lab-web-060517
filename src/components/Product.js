// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{
  render(){
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

function createCustomPropType(isRequired){
  return function(props, propName, componentName){
    if(!props[propName]){
      if(isRequired){
        throw new Error(
          'xd kid'
        )
      }
    }
    if(typeof(props[propName]) !== 'number'){
      return new Error(
        'ur actually so bad'
      )
    }
    if((props[propName] > 300) || (props[propName] < 80)){
      return new Error(
        'LMAO'
      )
    }
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: createCustomPropType(true)
}

export default Product
