import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import type { FC, HTMLAttributes } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  title: {
    fontWeight: 600,
    fontSize: '45px',
  },
}));

export const Logo: FC<HTMLAttributes<HTMLSpanElement>> = ({ children, className, ...rest }) => {
  const classes = useStyles();

  return (
    <span className={classNames(classes.container, className)} {...rest}>
      <img alt="Logo" height="50px" src={require('../../assets/logo.svg').default} width="50px" />
      <span className={classes.title}>Lyric</span>
    </span>
  );
};
