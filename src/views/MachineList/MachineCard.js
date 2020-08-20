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
import AccessTimeIcon from '@material-ui/icons/FormatColorFill';
import GetAppIcon from '@material-ui/icons/Build';
import Loyalty from '@material-ui/icons/Loyalty';
import Error from '@material-ui/icons/Error';
import TimeToLeave from '@material-ui/icons/TimeToLeave';

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
          <Typography
            align="center"
            color="textPrimary"
            variant="body1"
          >
            {product.description}
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
              <AccessTimeIcon
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                Ult. Troca de Óleo {product.totalDownloads}Km
            </Typography>
            </Grid>
            <Grid
              className={classes.statsItem}
              item
            >
              <GetAppIcon
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                Ult. Revisão {product.createdAt}
              </Typography>
            </Grid>
            <Grid
              className={classes.statsItem}
              item
            >
              <Loyalty
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                Chevrolet
            </Typography>
            </Grid>

            <Grid
              className={classes.statsItem}
              item
            >
              <TimeToLeave
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                Placa OXY8181
            </Typography>
            </Grid>

            <Grid
              className={classes.statsItem}
              item
            >
              <Error
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                DISPONÍVEL
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
