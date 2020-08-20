import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { ProductToolbar, ProductTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const ProductList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <ProductToolbar />
      <div className={classes.content}>
        <ProductTable users={users} />
      </div>
    </div>
  );
};

export default ProductList;
