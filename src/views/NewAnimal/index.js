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

export default function NewAnimal() {
  const classes = useStyles();
  const history = useHistory()

  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
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
                  Cadastrar lote de animais
              </Typography>
              </Grid>
            </Grid>


            <Grid className={classes.content} container spacing={3}>
              <Grid item xs={12} sm={9}>
                <TextField
                  required
                  id="loteName"
                  name="loteName"
                  label="Nome do lote"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel required id="sexo">Sexo</InputLabel>
                  <Select
                    required
                    labelId="sexo"
                    id="sexo"
                    value={category}
                    onChange={handleChange}
                    label="Sexo"
                    variant="outlined"
                  >
                    <MenuItem value={"Macho"}>Macho</MenuItem>
                    <MenuItem value={"Fêmea"}>Fêmea</MenuItem>
                    <MenuItem value={"Misto"}>Misto</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id="registre"
                  name="registre"
                  label="Registro"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel variant="outlined" id="category">Categoria</InputLabel>
                  <Select
                    labelId="category"
                    id="category"
                    value={category}
                    onChange={handleChange}
                    label="Categoria"
                    variant="outlined"
                  >
                    <MenuItem value={"Macho"}>Macho</MenuItem>
                    <MenuItem value={"Fêmea"}>Fêmea</MenuItem>
                    <MenuItem value={"Misto"}>Misto</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="race"
                  name="race"
                  label="Raça"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  type="date"
                  id="nasc"
                  name="nasc"
                  helperText="Nascimento"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  type="date"
                  id="vacine"
                  name="vacine"
                  helperText="Data da Ultima vacinação"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="food"
                  name="food"
                  label="Tipo de ração"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Divider />
              <Grid item xs={12} sm={2}>
                <TextField
                  type="number"
                  required
                  id="avaliacao"
                  name="avaliacao"
                  label="Avaliação total"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  type="number"
                  required
                  id="qtd"
                  name="qtd"
                  label="Quantidade de animais"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  disabled
                  type="number"
                  required
                  id="avaliacaoMedia"
                  name="avaliacaoMedia"
                  label="Avaliação média"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="obs"
                  name="obs"
                  label="Observação"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                  label="Lote inativo"
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
