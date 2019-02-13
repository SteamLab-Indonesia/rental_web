import React from 'react';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import InputLabel from '@material-ui/core/InputLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 20,
      width: 100,
      height: 100,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 170,
      },    
  });

  class AddVendor extends React.Component {

    constructor()
    {
        super(constructor);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  
    render() {
      const { classes } = this.props;

    return (
      <Grid container direction="row" justify="center" alignItems="flexstart">
        <Grid item>
            <Avatar alt="R" src="../images/logo.jpg" className={classes.bigAvatar} /> 
        </Grid>
        <Grid item>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <TextField
                        id="standard-name"
                        label="FullName"
                        className={classes.textField}
                        onChange={this.handleChange('FullName')}
                        margin="normal"
                    />
                </Grid>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-simple">Vendor</InputLabel>
                        <Select
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'Vendor',
                            id: 'age-simple',
                        }}
                        >
                            <MenuItem value={'Tokopedia'}>Tokopedia</MenuItem>
                            <MenuItem value={'Bukalapak'}>Bukalapak</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <TextField
                    id="standard-name"
                    label="Email"
                    className={classes.textField}
                    onChange={this.handleChange('Phone')}
                    margin="normal"
                    />
                </Grid>
                <Grid item>
                    <TextField
                    id="standard-name"
                    label="Phone"
                    className={classes.textField}
                    onChange={this.handleChange('FullName')}
                    margin="normal"
                    />
                </Grid>
                <Grid item>
                    <RadioGroup
                    aria-label="Privilege"
                    name="Privilege"
                    className={classes.group}
                    onChange={this.handleChange}
                    >
                        <FormControlLabel value="Adiministrator" control={<Radio />} label="Administrator" />
                        <FormControlLabel value="Finance" control={<Radio />} label="Finance" />
                        <FormControlLabel value="Operator" control={<Radio />} label="Operator" />
                    </RadioGroup>
                </Grid>
                <Grid item>
                        <Button
                        variant="contained"
                        color="primary"
                        disableRipple
                        className={classNames(classes.margin, classes.bootstrapRoot)}
                    >
                        Submit
                        </Button>
                </Grid>
            </Grid>        
        </Grid>
      </Grid>
    );
  }
  }

  export default withStyles(styles)(AddVendor);