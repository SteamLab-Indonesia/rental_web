import React, { Component } from 'react';
import '../Projj.css';
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
import { Button } from '@material-ui/core';
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
    main: {
        marginLeft: '50px'        
    }
});

class Dashboard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div id="main" className={classes.main}>
                <Button>
                    <Grid item component={Link} to="/abc" className="dis-content">
                        <Card className={classes.card}>
                            <CardContent>
                                <PersonIcon className={classes.icon} />
                                <p id="name">users</p>
                            </CardContent>
                        </Card>        
                    </Grid>
                </Button>
                <Button>
                    <Grid item component={Link} to="/teacher" className="dis-content">
                        <Card className={classes.card}>
                            <CardContent>
                                <GroupIcon className={classes.icon} />
                                <p id="name">teacher</p>
                            </CardContent>
                        </Card>        
                    </Grid>
                </Button>
                <Button>
                    <Grid item component={Link} to="/courses" className="dis-content">
                        <Card className={classes.card}>
                            <CardContent>
                                <BookIcon className={classes.icon} />
                                <p id="name">courses</p>
                            </CardContent>
                        </Card>        
                    </Grid>
                </Button>

                <Button>
                    <Grid item component={Link} to="/attendence" className="dis-content">
                        <Card className={classes.card}>
                            <CardContent>
                                <BarChartIcon className={classes.icon} />
                                <p id="name">attendance</p>
                            </CardContent>
                        </Card>        
                    </Grid>
                </Button>
                <Button>
                    <Grid item component={Link} to="/payment" className="dis-content">
                        <Card className={classes.card}>
                            <CardContent>
                                <AttachMoneyIcon className={classes.icon} />
                                <p id="name">payment</p>
                            </CardContent>
                        </Card>        
                    </Grid>
                </Button>
                <Button>
                    <Grid item component={Link} to="/feedback" className="dis-content">
                        <Card className={classes.card}>
                            <CardContent>
                                <FeedbackIcon className={classes.icon} />
                                <p id="name">feedback</p>
                            </CardContent>
                        </Card>        
                    </Grid>
                </Button>
            </div>
        )        
    }
}

export default withStyles(styles)(Dashboard);