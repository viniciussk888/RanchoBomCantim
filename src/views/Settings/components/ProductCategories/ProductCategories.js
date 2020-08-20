import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  Table,
  Paper,
  Typography,
  Button,
  TableBody,
  TableCell,
  TableRow,
  IconButton,
  TextField
} from '@material-ui/core';


import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  },
  large: {
    minWidth: '80%',
    marginBottom: 5,
  },
}));

const ProductCategories = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          subheader="Gerenciar categorias de produtos"
          title="Categorias de produto"
        />
        <Divider />
        <CardContent>
          <React.Fragment>
            <Grid item xs={12} sm={12}>

            </Grid>
            <Typography>Total 5 registros</Typography>
            <Grid item xs={12} sm={12}>
              <div>
                <Paper className={classes.root}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          fgdfgdf
                                </TableCell>
                        <TableCell align="right">
                          <IconButton
                            color="secondary"
                            aria-label="Deletar">
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Paper>
              </div>
            </Grid>
          </React.Fragment>
        </CardContent>
        <Divider />
        <CardActions>
          <TextField
            className={classes.large}
            required
            id="filled-required"
            label="Adicionar novo"
            variant="outlined"
          />
          <Button
            color="primary"
            variant="outlined"
          >
            Adicionar
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

ProductCategories.propTypes = {
  className: PropTypes.string
};

export default ProductCategories;
