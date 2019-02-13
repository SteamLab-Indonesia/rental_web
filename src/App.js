import React, { Component } from 'react';
import MyHeader from './components/MyHeader';
//import Dashboard from './screens/Dashboard';
import Navigation from './components/Navigation';
import {ScreenCloseStyle, ScreenStyle} from './styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      //type: 'dark', // Switching the dark mode on is a single property value change.
      primary: blue,
      secondary: pink,
  },
  typography: { useNextVariants: true },
});

const styles = theme => ({

});

class App extends Component {
  
  constructor(props)
  {
    super(props);
    this.state = {
      isDrawerOpen: false
    }
    this.updateDrawerState = this.updateDrawerState.bind(this);
  }

  updateDrawerState(isOpen)
  {
    this.setState({
      isDrawerOpen: isOpen
    });
  }

  render() {
    return (
      <div className="App">        
        <MuiThemeProvider theme={theme}>
          <MyHeader updateDrawerState={this.updateDrawerState} />
          <main style={this.state.isDrawerOpen ?  ScreenStyle : ScreenCloseStyle}>
            <Navigation />
          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
