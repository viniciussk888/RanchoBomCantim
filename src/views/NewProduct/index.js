import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

export default function NewProduct() {
  const classes = useStyles();
  const history = useHistory()

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
                  Cadastrar produto
              </Typography>
              </Grid>
            </Grid>


            <Grid className={classes.content} container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Nome"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="category">Categoria</InputLabel>
                  <Select
                    labelId="category"
                    id="category"
                    value={age}
                    onChange={handleChange}
                    label="Categoria"
                    variant="outlined"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="reference"
                  name="reference"
                  label="Referência"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="BarrerCod"
                  name="BarrerCod"
                  label="Cod. Barras"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="und"
                  name="und"
                  label="Unidade"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="ncm"
                  name="ncm"
                  label="NCM"
                  fullWidth
                  variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="cest"
                  name="cest"
                  label="CEST"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Divider />
              <Grid item xs={12} sm={2}>
                <TextField
                  type="number"
                  required
                  id="stock"
                  name="stock"
                  label="Estoque"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  type="number"
                  required
                  id="minstock"
                  name="minstock"
                  label="Estoque mínimo"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  type="number"
                  required
                  id="orderValue"
                  name="orderValue"
                  label="Valor de compra"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  type="number"
                  required
                  id="profitmargin"
                  name="profitmargin"
                  label="Margem de lucro"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  type="number"
                  required
                  id="saleValue"
                  name="saleValue"
                  label="Valor de venda"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                  label="Produto inativo"
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
