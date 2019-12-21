import React, {useEffect, useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import LinearProgress from "@material-ui/core/LinearProgress";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
const delay = (s) => new Promise(resolve => setTimeout(resolve, s * 1000));

export default function DownloadedModal({open}) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    let fadeText = "";
    const [additionalText, setAdditionalText] = useState('')
    const [count, setCount] = useState(0);

    const interval = useInterval(() => {
        setCount(count + 1);
    }, 1000);

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

     count % 5 === 0 ? fadeText = ("Preparing the CSV file") : fadeText = ("");

    // const [open, setOpen] = React.useState(false);
    //
    // const handleOpen = () => {
    //     setOpen(true);
    // };
    //
    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                // onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <p id="simple-modal-description">
                        System is working on your request...
                    </p>
                    <DownloadedModal />
                     <div style={{height: 20}}>{fadeText === "" ? (<LinearProgress  variant="query" color="primary" />) : fadeText }</div>

                </div>
            </Modal>
        </div>
    );
}
