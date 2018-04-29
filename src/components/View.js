import React, { Component } from 'react';
import PropTypes from 'prop-types';

class View extends Component {

  render() {
    const componentWidth = this.props.width;
    return (
      <div style={{width: componentWidth}}>
        {this.props.children}
      </div>
    );
  }
}

View.propTypes = {
    children: PropTypes.any,
    width: PropTypes.string.isRequired
};

export default View;
