import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import LinearProgress from "@material-ui/core/LinearProgress";
import PropTypes from "prop-types";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
        [theme.breakpoints.between("xs", "sm")]: {
        fontSize: "1.4em",
        width: 350,
        padding: "16px 20px 24px"
        },
},
}));

export default function DownloadedModal({ open }) {
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

  count % 5 === 0 ? (fadeText = "Preparing the CSV file") : (fadeText = "");

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
      >
        <div style={modalStyle} className={classes.paper}>
          <p id="simple-modal-description">
            System is working on your request...
          </p>
          <div style={{ height: 20 }}>
            {fadeText === "" ? (
              <LinearProgress variant="query" color="primary" />
            ) : (
              fadeText
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

DownloadedModal.propTypes = {
  open: PropTypes.bool.isRequired
};