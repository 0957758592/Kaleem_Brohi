import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
    padding: theme.spacing(1),
    margin: "0 auto",
    "& .MuiInputLabel-animated": {
      fontSize: "1.4em"
    },
    [theme.breakpoints.between("xs", "sm")]: {
      minWidth: "70%",
      maxWidth: "95%",
      "& .MuiInputLabel-animated": {
        fontSize: "1.4em"
      },
        "& .DateInput_input": {
        fontSize: "1.2em",
      },
        "& .MuiButton-label": {
            fontSize: "1.2em",
        },
        "& .MuiInput-root": {
            fontSize: "1.2em",
        },
        "& .makeStyles-formControl-86": {
            margin: "0 8px",
        }
    },
    [theme.breakpoints.between("md", "lg")]: {
      minWidth: "50%",
      maxWidth: "60%"
    },
    [theme.breakpoints.up("xl")]: {
      minWidth: "30%",
      maxWidth: "40%",
    }
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
      </div>
    </Wrapper>
  );
};
