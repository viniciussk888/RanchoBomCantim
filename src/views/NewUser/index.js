import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack'

import { useHistory } from 'react-router-dom'
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  grid: {
    marginBottom: 5,
    padding: 30
  },
  content: {
    marginTop: 15
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 275,
  },
  buttonDelete: {
    backgroundColor: '#ff0000'
  },
  title: {
    font: '700 Archivo;'
  }
}));

export default function NewUser() {
  const classes = useStyles();
  const history = useHistory()



  return (
    <>
      <Grid item xs={12} className={classes.grid}>
        <Paper className={classes.paper}>
          <React.Fragment>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <IconButton onClick={() => (history.goBack())}>
                  <ArrowBack />
                </IconButton>
              </Grid>

              <Grid item xs={3}>
                <Typography className={classes.title} variant="h4" gutterBottom>
                  Cadastrar usuário
              </Typography>
              </Grid>
            </Grid>


            <Grid className={classes.content} container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Nome"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="login"
                  name="login"
                  label="Login"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Senha"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="re-password"
                  name="re-password"
                  label="Repetir senha"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                  label="Administrador"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="phone"
                  name="phone"
                  label="Telefone"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="E-mail"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="adress"
                  name="adress"
                  label="Endereço"
                  fullWidth
                  variant="outlined" />
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                  label="Usuário inativo"
                />
              </Grid>
              <Grid item xs={6} sm={2}>
                <Button color="primary" variant="contained">Gravar</Button>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Button className={classes.buttonDelete} variant="outlined">Deletar</Button>
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>
      </Grid>
    </>
  );
}
