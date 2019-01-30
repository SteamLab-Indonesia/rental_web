import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles'
import {ScreenStyle} from '../../styles';

const styles = theme => ({

});

class CTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div style={ScreenStyle}></div>
        );
    }

}

export default withStyles(styles)(CTemplate);