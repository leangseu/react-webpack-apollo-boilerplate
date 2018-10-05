import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import './assets/styles/root.scss';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Home from './views/Home.jsx';

const styles = theme => ({

});

export default withStyles(styles)((props) => {
  const {classes} = props;
  return <Grid >
          <Router>
            <Fragment>
              <Route exact path="/" component={Home}/>
            </Fragment>
          </Router>
        </Grid>
});