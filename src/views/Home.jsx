import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
});

class Home extends Component {
  render() {
    const {classes} = this.props;

    return <Grid>
      HOME
    </Grid>
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home);