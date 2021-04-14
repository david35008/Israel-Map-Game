import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';
import Slider from './Slider';
import ConfigPanel from "./ConfigPanel";
import Grid from '@material-ui/core/Grid';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SwipeableTemporaryDrawer({
    places, setPlaces,
    city, setCity,
    settlement, setSettlement,
    moshav, setMoshav,
    kibbutz, setKibbutz,
    winDistance, setWinDistance,
    setMaxTries, maxTries
}) {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerOpen((prevState) => !prevState);
    };

    const maxTriesChange = (isPlus) => {
        setMaxTries((prevState) => {
            if (isPlus) {
                return prevState + 1
            } else {
                // eslint-disable-next-line
                if (maxTries == 1) return prevState
                return prevState - 1
            }
        });
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onKeyDown={toggleDrawer()}
        >
            <Slider winDistance={winDistance} setWinDistance={setWinDistance} />
            <Divider />
            <div className='hebrew-text-small important center' > מספר הנסיונות</div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className='tries-wrapper'
            >
                <IconButton onClick={() => maxTriesChange(true)} >
                    <AddBoxIcon />
                </IconButton>
                <span
                >
                    {maxTries}
                </span>
                <IconButton onClick={() => maxTriesChange(false)}>
                    <IndeterminateCheckBoxIcon />
                </IconButton>
            </Grid>
            <Divider />
            <ConfigPanel
                places={places}
                setPlaces={setPlaces}
                city={city}
                setCity={setCity}
                settlement={settlement}
                setSettlement={setSettlement}
                moshav={moshav}
                setMoshav={setMoshav}
                kibbutz={kibbutz}
                setKibbutz={setKibbutz}
            />
        </div>
    );
    const anchor = 'left';
    return (
        <React.Fragment key={anchor}>
            <IconButton onClick={toggleDrawer()} aria-label="delete">
                <SettingsIcon />
            </IconButton>
            <SwipeableDrawer
                anchor={anchor}
                open={drawerOpen}
                onClose={toggleDrawer()}
                onOpen={toggleDrawer()}
            >
                {list(anchor)}
            </SwipeableDrawer>
        </React.Fragment>
    );
}