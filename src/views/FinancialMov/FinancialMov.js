import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { FinancialTable, FinancialTablePag, FinancialTableRec } from './components';
import mockData from './data';
import FinancialMenu from './components/FinancialMenu'
//import Replay from '@material-ui/icons/Replay'
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2)
  },
}));

const FinancialMov = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  useEffect(() => {
    localStorage.setItem('financial', "Movimento")
  }, [])

  const selectedFinancial = localStorage.getItem('financial')

  function handleSelectedFinancial() {
    switch (selectedFinancial) {
      case "Movimento":
        return <FinancialTable users={users} />
      case "Pagar":
        return <FinancialTablePag users={users} />
      case "Receber":
        return <FinancialTableRec users={users} />
      default:
        return <FinancialTable users={users} />
    }
  }

  return (
    <>
      <div className={classes.root}>

        <FinancialMenu />

        <div className={classes.content}>
          {handleSelectedFinancial()}
        </div>

      </div >
    </>);
};

export default FinancialMov;
