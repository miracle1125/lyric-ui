import { Backdrop, BackdropProps, Box, CircularProgress, makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import type { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.common.white,
  },
}));

export const SectionOverlay: FC<BackdropProps> = ({ className, children, ...rest }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classNames(classes.backdrop, className)} {...rest}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <CircularProgress color="inherit" />
        Analyzing
      </Box>
    </Backdrop>
  );
};
