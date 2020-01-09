import React, { useEffect, useState, useRef } from 'react';
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import LinearProgress from "@material-ui/core/LinearProgress";

import { STORE_KEYS } from "@/stores";

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

function DownloadedModal({ openModal, isEmptyData, handleModalClose, setEmptyData }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    let fadeText = "";
    const [count, setCount] = useState(0);

    useInterval(() => {
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

    const popupMessage = (isEmptyData) => {
        return isEmptyData ? "No Record found of given search" : "System is working on your request..."
    }

    count % 5 === 0 ? fadeText = ("Preparing the CSV file") : fadeText = ("");

    const [open, setOpen] = React.useState(openModal);
    useEffect(() => { setOpen(openModal) }, [openModal])

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={!isEmptyData ? null : handleModalClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <p id="simple-modal-description">
                        {popupMessage(isEmptyData)}
                    </p>
                    <DownloadedModal />
                    <div style={{ height: 20 }}>{fadeText === "" ? (!isEmptyData && <LinearProgress variant="query" color="primary" />) : !isEmptyData && fadeText}</div>

                </div>
            </Modal>
        </div>
    );
}

export default compose(
    inject(STORE_KEYS.VIEWMODESTORE),
    observer,
    withProps(({ [STORE_KEYS.VIEWMODESTORE]: { isEmptyData, setEmptyData } }) => ({
        isEmptyData,
        setEmptyData
    }))
)(DownloadedModal);