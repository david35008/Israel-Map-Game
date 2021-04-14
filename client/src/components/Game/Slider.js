import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        marginLeft: '2vw'
    },
    margin: {
        height: theme.spacing(3),
    },
}));


export default function DiscreteSlider({ winDistance, setWinDistance }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider-always" className='hebrew-text-small important padding' gutterBottom>
                טווח המרחק מהיעד לתשובה נכונה (ק"מ)
      </Typography>
            <Slider
                onChangeCommitted={(event, value) => setWinDistance(value)}
                defaultValue={winDistance}
                step={1}
                max={100}
                min={0}
                valueLabelDisplay="on"
            />
        </div>
    );
}