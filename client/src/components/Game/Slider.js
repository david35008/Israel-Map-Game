import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];

function valuetext(value) {
    return `${value}°C`;
}

export default function DiscreteSlider({ winDistance, setWinDistance }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider-always" className='hebrew-text padding' gutterBottom>
                טווח המרחק מהיעד לתשובה נכונה
      </Typography>
            <Slider
                onChangeCommitted={(event, value) => setWinDistance(value)}
                defaultValue={winDistance}
                getAriaValueText={valuetext}
                step={1}
                max={100}
                min={0}
                valueLabelDisplay="on"
            />
        </div>
    );
}