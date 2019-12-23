import React, { useState } from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DownloadedModal from "../../components/Modal";
import { getCSVFile } from "@/stores/wrd_apis";

import { STORE_KEYS } from "@/stores";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: 50
    }
  }
}));

const FilterDownload = ({ getDownloadFile }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button type="submit" variant="contained" onClick={handleDownload}>
        Download
      </Button>
      <DownloadedModal open={isLoading} />
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
