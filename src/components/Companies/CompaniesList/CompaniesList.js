import React, {} from 'react';
import ListItem from '../ListItem/ListItem';
// import style from './CompaniesList.module.css';

const CompaniesList = (props) => props.companies.map((comp) => (
  <ListItem key={comp.id} comp={comp} delCompany={props.delCompany} />
));

export default CompaniesList;
