import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Toolbar from './Toolbar';
import AnimalCard from './AnimalCard';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const AnimalList = () => {
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <Container className={classes.root} maxWidth={false}>
      <Toolbar />
      <Box mt={3}>
        <Grid
          container
          spacing={3}
        >
          {products.map((product) => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <AnimalCard
                className={classes.productCard}
                product={product}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      {/*<Box
        mt={3}
        display="flex"
        justifyContent="center"
      >paginaçao
      </Box>*/}
    </Container>
  );
};

export default AnimalList;
