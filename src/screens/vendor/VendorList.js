import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import BookIcon from '@material-ui/icons/Assignment';
import BarChartIcon from '@material-ui/icons/BarChart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FeedbackIcon from '@material-ui/icons/Feedback';
import { Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";


const styles = theme => ({
    root: {
        color: theme.palette.text.primary,
    },
    icon: {
        margin: theme.spacing.unit,
        fontSize: 70,
    },
    card: {
        minWidth: 300,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

class Dashboard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <Typography style={{color: 'white'}}>
                    Vendor List
                </Typography>
                <div id="main" style={{textAlign: 'center'}}>
                    <Button>
                        <Grid item component={Link} to="/abc" className="dis-content">
                            <Card className={classes.card}>
                                <CardContent>
                                    <PersonIcon className={classes.icon} />
                                    <p id="name">iPlug</p>
                                    <p id="name">JL. Sumatra</p>
                                </CardContent>
                            </Card>        
                        </Grid>
                    </Button>
                    <Button>
                        <Grid item component={Link} to="/abc" className="dis-content">
                            <Card className={classes.card}>
                                <CardContent>
                                    <PersonIcon className={classes.icon} />
                                    <p id="name">iPlug</p>
                                    <p id="name">JL. Sumatra</p>
                                </CardContent>
                            </Card>        
                        </Grid>
                    </Button>
                    <Button>
                        <Grid item component={Link} to="/abc" className="dis-content">
                            <Card className={classes.card}>
                                <CardContent>
                                    <PersonIcon className={classes.icon} />
                                    <p id="name">iPlug</p>
                                    <p id="name">JL. Sumatra</p>
                                </CardContent>
                            </Card>        
                        </Grid>
                    </Button>                
                </div>
            </>
        )        
    }
}

export default withStyles(styles)(Dashboard);