import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom'

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const ProductToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const history = useHistory();


  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        {/*<Button className={classes.importButton}>Import</Button>
        <Button className={classes.exportButton}>Export</Button>*/}
        <Button
          color="primary"
          variant="contained"
          onClick={() => (history.push('/newproduct'))}
        >
          Novo Produto
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Buscar produto"
        />
        <Button
          color="primary"
          variant="contained"
        >
          Buscar
        </Button>
      </div>
    </div>
  );
};

ProductToolbar.propTypes = {
  className: PropTypes.string
};

export default ProductToolbar;
