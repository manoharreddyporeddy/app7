import React from 'react';
import './style.css';
import Grid from '@mui/material/Grid';
import Header from './Header.js';
import { Textfield } from './TextField.js';

export default function App() {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={12} />
          <Grid item xs={12} sm={8}>
            This is the content
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
      <Textfield />
    </div>
  );
}
