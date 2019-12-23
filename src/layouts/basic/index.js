import React from "react";
import Grid from "@material-ui/core/Grid";

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

export default () => {
  return (
    <Wrapper>
      <Grid container alignItems="center" justify="center">
        <Grid item xl={3} lg={3} md={6} sm={9} xs={10}>
          <h1>Research Data</h1>
          <FilterByDate />
          <FilterByTest />
          <FilterByCustomer />
          <FilterByGrade />
          <FilterByDistrict />
          <FilterByBuilding />
          <FilterByClass />
          <FilterByStudent />
          <FilterDownload />
        </Grid>{" "}
      </Grid>
    </Wrapper>
  );
};
