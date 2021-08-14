import { Box, Container, makeStyles } from '@material-ui/core';
import type { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: '1024px',
  },
  bannerOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(180deg, #9575CD 0%, rgba(149, 117, 205, 0.33) 100%)',
  },
  banner: {
    display: 'block',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
}));

export const AuthLayout: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.container} maxWidth={false}>
      <Box display="flex" height="100vh">
        <Box flex="0 0 540px" height="100%" position="relative">
          <div className={classes.bannerOverlay} />
          <img alt="Auth banner" className={classes.banner} src={require('../../assets/auth.svg').default} />
        </Box>
        <Box flex="1" display="flex" flexDirection="column" justifyContent="center" paddingLeft={10} paddingRight={10}>
          {children}
        </Box>
      </Box>
    </Container>
  );
};
