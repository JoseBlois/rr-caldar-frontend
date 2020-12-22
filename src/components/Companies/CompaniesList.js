import React, {} from 'react';
import ListItem from './ListItem';

const CompaniesList = (props) => props.companies.map((comp) => (
  <ListItem key={comp.id} comp={comp} delCompany={props.delCompany} />
));

export default CompaniesList;
