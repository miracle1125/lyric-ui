import { makeStyles, Paper, Typography } from '@material-ui/core';
import type { FC } from 'react';
import { Money } from '../atoms/Money';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    padding: '10px 20px',
  },
  value: {
    marginTop: theme.spacing(1),
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: '27px',
  },
}));

export const ProjectEarnings: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Typography variant="body1">Project Earnings</Typography>
      <Typography className={classes.value} variant="h4">
        <Money amount={895.89} language="en" currency="usd" />
      </Typography>
    </Paper>
  );
};
