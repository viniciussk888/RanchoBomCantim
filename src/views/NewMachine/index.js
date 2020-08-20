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

export default function NewMachine() {
  const classes = useStyles();
  const history = useHistory()

  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };


  const statusList = [
    {
      value: 'DISPONÍVEL',
      label: 'DISPONÍVEL',
    },
    {
      value: 'INDISPONÍVEL',
      label: 'INDISPONÍVEL',
    },
    {
      value: 'ALUGADO',
      label: 'ALUGADO',
    },
    {
      value: 'EM USO',
      label: 'EM USO',
    },
    {
      value: 'EM MANUTENÇÃO',
      label: 'EM MANUTENÇÃO',
    },
  ];
  const [status, setStatus] = React.useState('');

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
                  Cadastrar Maquinário
              </Typography>
              </Grid>
            </Grid>


            <Grid className={classes.content} container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="description"
                  name="description"
                  label="Descrição"
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
                    value={category}
                    onChange={handleChange}
                    label="Categoria"
                    variant="outlined"
                  >
                    <MenuItem value={"Motocicleta"}>Motocicleta</MenuItem>
                    <MenuItem value={"Automóvel"}>Automóvel</MenuItem>
                    <MenuItem value={"Caminhonete"}>Caminhonete</MenuItem>
                    <MenuItem value={"Caminhão"}>Caminhão</MenuItem>
                    <MenuItem value={"Reboque ou semi-reboque"}>Reboque ou semi-reboque</MenuItem>
                    <MenuItem value={"Trator"}>Trator</MenuItem>
                    <MenuItem value={"Caçamba"}>Caçamba</MenuItem>
                    <MenuItem value={"Maquinário agrícola"}>Maquinário agrícola</MenuItem>
                    <MenuItem value={"Outros"}>Outros</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  id="brand"
                  name="brand"
                  label="Marca"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="model"
                  name="model"
                  label="Modelo"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="renavam"
                  name="renavam"
                  label="Renavam"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="board"
                  name="board"
                  label="Placa"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  id="year"
                  name="year"
                  label="Ano"
                  fullWidth
                  variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  type="date"
                  id="reviewDate"
                  name="reviewDate"
                  helperText="Ultima Revisão"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  type="number"
                  id="oilDate"
                  name="oilDate"
                  label="Ultima troca de oleo (Km)"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Divider />
              <Grid item xs={12} sm={2}>
                <TextField
                  id="filled-select-currency"
                  select
                  label="Status"
                  value={status}
                  onChange={handleChangeStatus}
                  helperText="Selecione o status atual do veiculo"
                  variant="outlined"
                >
                  {statusList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={10}>
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
                  label="Maquinário inativo"
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
