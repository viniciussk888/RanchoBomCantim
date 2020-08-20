import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Card } from '@material-ui/core';

import { Link } from 'react-router-dom'
//import Replay from '@material-ui/icons/Replay'

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(3),
    minWidth: 275,
  },
  cardMov: {
    backgroundColor: '#4e11ff',
    padding: theme.spacing(3),
  },
  cardPag: {
    backgroundColor: '#ff0000',
    padding: theme.spacing(3),
  },
  cardRec: {
    backgroundColor: '#00db70',
    padding: theme.spacing(3),
  },
  font: {
    color: '#fff'
  },
  selected: {
    border: '5px solid #001662'
  }
}));

const FinancialMenu = () => {

  const classes = useStyles();
  const selectedFinancial = localStorage.getItem('financial')
  const [selectedMov, setSelectedMov] = useState(true)
  const [selectedRec, setSelectedRec] = useState(false)
  const [selectedPag, setSelectedPag] = useState(false)

  function handleSelected(select) {
    if (select === "mov") {
      setSelectedMov(true)
      setSelectedPag(false)
      setSelectedRec(false)
      localStorage.setItem('financial', 'Movimento')
    } else if (select === "rec") {
      setSelectedMov(false)
      setSelectedPag(false)
      setSelectedRec(true)
      localStorage.setItem('financial', 'Receber')
    } else if (select === "pag") {
      setSelectedMov(false)
      setSelectedPag(true)
      setSelectedRec(false)
      localStorage.setItem('financial', 'Pagar')
    }
  }

  useEffect(() => {
    if (selectedFinancial === "Movimento") {
      setSelectedMov(true)
      setSelectedPag(false)
      setSelectedRec(false)
    } else if (selectedFinancial === "Pagar") {
      setSelectedMov(false)
      setSelectedPag(true)
      setSelectedRec(false)
    } else if (selectedFinancial === "Receber") {
      setSelectedMov(false)
      setSelectedPag(false)
      setSelectedRec(true)
    }
  }, [])
  return (
    <>
      <Grid
        container
        spacing={3}
      >

        <Grid
          item
          lg={4}
          xs={12}
          className={classes.card}
        >
          <Link className="link" onClick={() => (handleSelected('mov'))}>
            <Card className={selectedMov ? [classes.selected, classes.cardMov] : classes.cardMov}>
              <Typography className={classes.font} variant="h5" component="h2">
                MOVIMENTO FINANCEIRO
                </Typography>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          lg={4}
          xs={12}
        >
          <Link className="link" onClick={() => (handleSelected('pag'))}>
            <Card className={selectedPag ? [classes.selected, classes.cardPag] : classes.cardPag}>
              <Typography className={classes.font} variant="h5" component="h2">
                CONTAS A PAGAR
                </Typography>
            </Card>
          </Link>
        </Grid>

        <Grid
          item
          lg={4}
          xs={12}
        >
          <Link className="link" onClick={() => (handleSelected('rec'))}>
            <Card className={selectedRec ? [classes.selected, classes.cardRec] : classes.cardRec}>
              <Typography className={classes.font} variant="h5" component="h2">
                CONTAS A RECEBER
                </Typography>
            </Card>
          </Link>
        </Grid>

      </Grid >
    </>);
};

export default FinancialMenu;
