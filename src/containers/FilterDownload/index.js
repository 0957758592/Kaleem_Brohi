import React from 'react';
import { compose, withProps } from 'recompose';
import { inject, observer } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { STORE_KEYS } from '@/stores';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 250,
      height: 50,
    },
  },
}));

const FilterDownload = ({ getDownloadFile }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={() => {
        getDownloadFile();
      }}>Download</Button>
    </div>
  );
}

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.VIEWMODESTORE]: { getDownloadFile },
     }) => ({
      getDownloadFile,
    })
  )
)(FilterDownload);
