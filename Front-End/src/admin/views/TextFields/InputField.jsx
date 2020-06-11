import React, { Component } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const classes = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    input: {

    }
}));
class InputField extends Component {
    render() {
        const { name,value, onBlur,onChange, label } = this.props;
        return (
            <div>
                <TextField fullWidth name={name} value={value} onChange={onChange} onBlur=
                {onBlur}  margin="dense" label={label}  variant="outlined" />
            </div>
        );
    }
}

export default InputField;