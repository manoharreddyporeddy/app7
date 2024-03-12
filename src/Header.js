import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
  typographyStyles: {
    flex: 1
  }
})

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>Ajay Nag Karanam</Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
