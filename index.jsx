import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// react router
import {BrowserRouter} from "react-router-dom";

// apollo
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

// material-ui
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import defaultTheme from './src/themes/defaultTheme.jsx';
const theme = createMuiTheme(defaultTheme);

import Routes from './src/Routes.jsx';

class App extends Component {
  render() {
    return <BrowserRouter>
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes/>
        </MuiThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  }
}

ReactDOM.render(
  <App/>, document.getElementById('root'));