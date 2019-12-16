import React from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { getCSVFile } from "@/stores/wrd_apis";

import { STORE_KEYS } from "@/stores";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 250,
      height: 50
    }
  }
}));

const FilterDownload = ({ getDownloadFile, postQuery }) => {
  const classes = useStyles();

  const handleDownload = async () => {
    let query = "";
    for (let [key, value] of Object.entries(postQuery)) {
      query = query
        ? query.concat("", `&${key}=${value}`)
        : query.concat("", `${key}=${value}`);
    }
    getCSVFile().then(data => {
      getDownloadFile(data);
    });
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={handleDownload}>
        Download
      </Button>
    </div>
  );
};

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(
    ({ [STORE_KEYS.VIEWMODESTORE]: { getDownloadFile, postQuery } }) => ({
      getDownloadFile,
      postQuery
    })
  )
)(FilterDownload);
