import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


export default function RangeSlider() {
    const minPrice = ['100', '200', '300', '500', '1000', '2000', '3000', '4000', '5000'];
    const maxPrice = ['100', '200', '300', '500', '1000', '2000', '3000', '4000', '5000', '5000+'];
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    };

    return (
        <div >
            <Typography className='pt-2 text-uppercase font-weight-bold '
                style={{ fontSize: "14px" }} id="range-slider" gutterBottom>
                PRICE
      </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="range-slider"
            />
            <div className="row pb-2 pl-3">
                <div className="col-sm-4 p-0 m-0">
                <select style={{width: '80px'}}>{minPrice.map((x,y) => <option value={value[0]} key={y}>{x}</option>)}</select>
                </div>
                <div className="col-sm-2 pl-4 text-xs-center">to</div>
                <div className="col-sm-4 float-right">
                <select style={{width: '80px'}}>{maxPrice.map((x,y) => <option value={value[1]} key={y}>{x}</option>)}</select>
                </div>
            </div>
        </div>
    );
}
