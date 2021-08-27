import { Numeric } from '@eo-locale/react';
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import type { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    padding: '10px 20px',
  },
  value: {
    marginTop: theme.spacing(1),
    fontWeight: 'bold',
    fontSize: 50,
    lineHeight: '60px',
  },
  changes: {
    marginTop: theme.spacing(1),
    display: 'inline-flex',
    backgroundColor: 'rgba(76, 175, 80, 0.29)',
    borderRadius: 3,
    lineHeight: '22px',
    padding: '0 7px',
    color: '#4caf50',
  },
}));

export const ProjectListeners: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Box>
        <Typography variant="body1">Project Listeners</Typography>
        <Typography className={classes.value} variant="h4">
          <Numeric value={11235} />
        </Typography>
        <Box alignItems="center" className={classes.changes}>
          <TrendingUpIcon fontSize="small" />
          &nbsp;+1200
        </Box>
      </Box>

      <Box
        alignItems="center"
        borderRadius={4}
        display="flex"
        height={76}
        justifyContent="center"
        style={{ backgroundColor: '#424242' }}
        width={76}
      >
        <img alt="Headphone" src={require('../../assets/headphone.svg').default} />
      </Box>
    </Paper>
  );
};
