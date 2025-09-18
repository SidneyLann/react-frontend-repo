import React from 'react';
import { styled } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";

const FormControl0 = styled( FormControl )( {
    minWidth: '160px',
} );

class GeneralDropbox extends React.Component {
    render() {
        let options = this.props.options;
        const labelKey = this.props.labelKey;
        const valueKey = this.props.valueKey;
        
        if (Array.isArray( options ) ) {
		if (options.length>0) {
		  if (!options[0].value&&!options[0].label) {
		      const options2 = [];
		      for ( let i = 0; i < options.length; i++ ) {
		          const option = {};
		          option.value = valueKey? options[i][valueKey]: options[i];
		          option.label = labelKey? options[i][labelKey]: options[i];
		          console.log(value);console.log(option.value);console.log(option.label);
		          options2.push( option );
		      }
		      
		      options = options2;
		    }
		}
        }else{
            const options2 = [];
            const keys = Object.keys( options );
            for ( let i = 0; i < keys.length; i++ ) {
                const option = {};
                option.value = keys[i];
                option.label = options[keys[i]];
                options2.push( option );
            }
            options = options2;
        }

        return (
            <FormControl0>
                <InputLabel
                    htmlFor={'label-' + this.props.id}
                >
                    {this.props.label}
                </InputLabel>
                <Select
                    id={this.props.id}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    disabled={this.props.disabled}
                    input={ <OutlinedInput name={this.props.id} id={'label-' + this.props.id} /> }
                >
                    {options.map(( option, idx ) => {
                          return ( <MenuItem value={option.value}>{option.label}</MenuItem> )
                        }
                      )
                    }

                    {this.props.required}
                </Select>
            </FormControl0>
        )
    }
}

export default GeneralDropbox
