import React, { Component } from 'react';
import ListItem from './ListItem'
import PropTypes from 'prop-types';

class CompaniesList extends Component {
  render() {
    return this.props.companiesData.map((comp) => (
        <ListItem key={comp.id} comp={comp} delCompany={this.props.delCompany}/>
    ));
  }
}

CompaniesList.propTypes = {
    Companies: PropTypes.array.isRequired
}

export default CompaniesList;