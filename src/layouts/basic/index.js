import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

import FilterByDate from "@/containers/FilterByDate";
import FilterByTest from "@/containers/FilterByTest";
import FilterByCustomer from "@/containers/FilterByCustomer";
import FilterByGrade from "@/containers/FilterByGrade";
import FilterByDistrict from "@/containers/FilterByDistrict";
import FilterByBuilding from "@/containers/FilterByBuilding";
import FilterByClass from "@/containers/FilterByClass";
import FilterByStudent from "@/containers/FilterByStudent";
import FilterDownload from "@/containers/FilterDownload";

import { Wrapper } from "./styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    padding: theme.spacing(1),
    margin: "0 auto",
    fontSize: "1em",
    [theme.breakpoints.between('xs', 'sm')]: {
      minWidth: "70%",
      maxWidth: "80%",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      minWidth: "50%",
      maxWidth: "60%",
    },
    [theme.breakpoints.up('xl')]: {
      minWidth: "30%",
      maxWidth: "40%",
    },
  },
  button: {
    width: 260,
    margin: "0 auto"
  }
}));
export default () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <div className={classes.root}>
      {/*<Grid container alignItems="center" justify="center">*/}
      {/*  <Grid item xl={3} lg={3} md={6} sm={9} xs={10}>*/}
          <h1>Research Data</h1>
          <FilterByDate />
          <FilterByTest />
          <FilterByCustomer />
          <FilterByGrade />
          <FilterByDistrict />
          <FilterByBuilding />
          <FilterByClass />
          <FilterByStudent />
          <div className={classes.button}>
          <FilterDownload />
          </div>
      {/*  </Grid>{" "}*/}
      {/*</Grid>*/}
      </div>
    </Wrapper>
  );
};
