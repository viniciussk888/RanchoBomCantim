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
  MenuItem,
  // IconButton
} from '@material-ui/core';


import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
//import Search from '@material-ui/icons/Search'

import { Button } from '@material-ui/core';

import { SearchInput } from 'components';
import { ModalComponent } from 'components'

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

const FinancialTable = props => {
  const { className, users, ...rest } = props;

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  function showModal() {
    setOpen(!open)
  }

  const costcenters = [
    {
      value: 'REF. VENDA AVISTA',
      label: 'REF. VENDA AVISTA',
    },
    {
      value: 'REF. VENDA A PRAZO',
      label: 'REF. VENDA A PRAZO',
    },
    {
      value: 'REF. FORNECEDORES',
      label: 'REF. FORNECEDORES',
    },
    {
      value: 'REF. PAG. AGUA',
      label: 'REF. PAG. AGUA',
    },
  ];

  const currencies = [
    {
      value: '+',
      label: 'CREDITO',
    },
    {
      value: '-',
      label: 'DEBITO',
    },
  ];

  const [currency, setCurrency] = React.useState('');

  const [costcenter, setCostCenter] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangeCostCenter = (event) => {
    setCostCenter(event.target.value);
  };

  const body = (
    <>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          NOVO MOVIMENTO FINANCEIRO
      </Typography>
        <Grid container spacing={3}>
          <Grid center item xs={12} sm={6}>
            <TextField
              variant="outlined"
              id="client"
              name="client"
              label="Cliente"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              id="Referente"
              name="Referente"
              label="Referente"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              id="obs"
              name="obs"
              label="Observação"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="costcenter"
              select
              required
              label="Centro de custo"
              value={costcenter}
              onChange={handleChangeCostCenter}
              helperText="Selecione o centro de custo"
              variant="outlined"
            >
              {costcenters.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              variant="outlined"
              required
              type="number"
              id="value"
              name="value"
              label="Valor"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="operation"
              select
              required
              label="Operação"
              value={currency}
              onChange={handleChange}
              helperText="Selecione o tipo de operação"
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              type="date"
              required
              id="date"
              name="date"
              helperText="Data de lançamento"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained">GRAVAR</Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </>
  );



  return (
    <>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
          onClick={showModal}
        >
          NOVO MOVIMENTO
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput
          type="date"
          className={classes.searchInput}
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
        {open ? <ModalComponent open={true} body={body} /> : null}

        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>CENTRO DE CUSTO</TableCell>
                    <TableCell>CLIENTE</TableCell>
                    <TableCell>SINAL</TableCell>
                    <TableCell>VALOR</TableCell>
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

FinancialTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default FinancialTable;
