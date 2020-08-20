import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { Button } from '@material-ui/core';

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
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

const FinancialTablePag = props => {
  const { className, users, ...rest } = props;

  const classes = useStyles();


  return (
    <>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
        >
          NOVO A PAGAR
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Busca por referencia"
        />
        <Button
          color="primary"
          variant="contained"
        >
          Buscar
        </Button>

      </div>

      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>REFERENTE</TableCell>
                    <TableCell>CENTRO DE CUSTO</TableCell>
                    <TableCell>VALOR</TableCell>
                    <TableCell>PARCELA</TableCell>
                    <TableCell>VENCIMENTO</TableCell>
                    <TableCell>LANÇAMENTO</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map(user => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={user.id}
                    >
                      <TableCell>
                        <div className={classes.nameContainer}>
                          {/*<Avatar
                          className={classes.avatar}
                          src={user.avatarUrl}
                        >
                          {getInitials(user.name)}
                        </Avatar>*/}
                          <Typography variant="body1">{user.name}</Typography>
                        </div>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        {user.address.city}, {user.address.state},{' '}
                        {user.address.country}
                      </TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>
                        {moment(user.createdAt).format('DD/MM/YYYY')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </>
  );
};

FinancialTablePag.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default FinancialTablePag;
