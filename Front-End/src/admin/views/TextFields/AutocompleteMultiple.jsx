import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
class AutocompleteMultiple extends Component {
    
    render() {
        const { event,value, onChange, label, options,renderInput, renderTags } = this.props;
        return (
            <div>
                <Autocomplete
                    id="checkbox"
                    size="small"
                    style={{marginTop: 10}}
                    multiple
                    event={event}
                    disableCloseOnSelect
                    value={value}
                    onChange={onChange}
                    renderTags={renderTags}
                    // renderTags={() => {}}
                    label={label}
                    options={options}
                    getOptionLabel={(option) => option.itemName}
                    renderOption={(option, { selected }) => (
                        <React.Fragment>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            checked={selected}
                          />
                          {option.itemName}
                        </React.Fragment>
                      )}
                    renderInput={renderInput}
                />
            </div>
        );
    }
}

export default AutocompleteMultiple;