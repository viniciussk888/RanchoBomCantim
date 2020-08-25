import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import Bookmarks from '@material-ui/icons/Bookmarks';
import Pets from '@material-ui/icons/Pets';
import FastfoodOutlined from '@material-ui/icons/FastfoodOutlined';
import LocalAtmOutlined from '@material-ui/icons/LocalAtmOutlined';
import CheckCircle from '@material-ui/icons/CheckCircle';
import AttachMoney from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer'
  },
}));

const MachineCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <a className="link" href="/#" >
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <CardContent>
          <Box
            display="flex"
            justifyContent="center"
            mb={3}
          >
          </Box>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            {product.title}
          </Typography>
        </CardContent>
        <Box flexGrow={1} />
        <Divider />
        <Box p={2}>
          <Grid
            container
            justify="space-between"
            spacing={2}
          >
            <Grid
              className={classes.statsItem}
              item
            >
              <Bookmarks
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                Categoria
            </Typography>
            </Grid>
            <Grid
              className={classes.statsItem}
              item
            >
              <Pets
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                Raça
              </Typography>
            </Grid>
            <Grid
              className={classes.statsItem}
              item
            >
              <FastfoodOutlined
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                Ração
            </Typography>
            </Grid>

            <Grid
              className={classes.statsItem}
              item
            >
              <CheckCircle
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                Quantidade 587
            </Typography>
            </Grid>

            <Grid
              className={classes.statsItem}
              item
            >
              <AttachMoney
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                Total
            </Typography>
            </Grid>

            <Grid
              className={classes.statsItem}
              item
            >
              <LocalAtmOutlined
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                Media
            </Typography>
            </Grid>

          </Grid>
        </Box>
      </Card>
    </a>
  );
};

MachineCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default MachineCard;
