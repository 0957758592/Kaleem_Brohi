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
      width: 250,
      height: 50
    }
  }
}));

const FilterDownload = ({ getDownloadFile, postQuery }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const delay = (s) => new Promise(resolve => setTimeout(resolve, s * 1000));
  const handleDownload = async () => {
    let query = "";
    for (let [key, value] of Object.entries(postQuery)) {
      query = query
        ? query.concat("", `&${key}=${value}`)
        : query.concat("", `${key}=${value}`);
    }
    console.log("QUERY", query)
    // getCSVFile().then(query => {
    setIsLoading(true);
    await delay(11);
    getDownloadFile(query);
    setIsLoading(false)
    // });

  };

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
