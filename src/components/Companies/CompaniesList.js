import React, {} from 'react';
import ListItem from './ListItem';

const CompaniesList = (companies, delCompany) => companies.map((comp) => (
  <ListItem key={comp.id} comp={comp} delCompany={delCompany} />
));

export default CompaniesList;
