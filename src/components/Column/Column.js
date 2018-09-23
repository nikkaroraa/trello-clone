import { Component } from 'react';
import PropTypes from 'prop-types';

class Column extends Component {
  render() {
    const {
      column: { title }
    } = this.props;
    return title;
  }
}

Column.propTypes = {
  column: PropTypes.shape({
    title: PropTypes.string
  }).isRequired
};

export default Column;
