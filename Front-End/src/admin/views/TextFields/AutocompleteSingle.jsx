import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class AutocompleteSingle extends Component {
    
    render() {
        const { id, event,value, onChange, label,options,renderInput,getOptionDisabled } = this.props;
        return (
            <div>
                <Autocomplete
                    id={id}
                    size="small"
                    style={{marginTop: 10}}
                    event={event}
                    getOptionDisabled={getOptionDisabled}
                    value={value}
                    onChange={onChange}
                    label={label}
                    options={options}
                    getOptionLabel={(option) => option.itemName}
                    renderInput={renderInput}
                />
            </div>
        );
    }
}

export default AutocompleteSingle;