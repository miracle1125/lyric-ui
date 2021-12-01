import { Backdrop, BackdropProps, makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import type { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.common.white,
  },
}));

export const FullscreenOverlay: FC<BackdropProps> = ({ className, children, ...rest }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classNames(classes.backdrop, className)} {...rest}>
      <img alt="Loading" src={require('../../assets/loading.gif').default} width={80} height={80} />
    </Backdrop>
  );
};
