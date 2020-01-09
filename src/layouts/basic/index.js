import React from 'react';
import Grid from "@material-ui/core/Grid";

import FilterByDate from '@/containers/FilterByDate';
import FilterByTest from '@/containers/FilterByTest';
import FilterByCustomer from '@/containers/FilterByCustomer';
import FilterByGrade from '@/containers/FilterByGrade';
import FilterByDistrict from '@/containers/FilterByDistrict';
import FilterByBuilding from '@/containers/FilterByBuilding';
import FilterByClass from '@/containers/FilterByClass';
import FilterByStudent from '@/containers/FilterByStudent';
import FilterDownload from '@/containers/FilterDownload';

import { Wrapper } from './styles';

export default () => {
  return (
    <Wrapper><br />
      <Grid container alignItems="center" justify="center">
        <Grid item md={6} sm={6}>
          <h1>Research Data</h1>
          <FilterByDate /><br />
          <FilterByTest /><br />
          <FilterByCustomer /><br />
          <FilterByGrade /><br />
          <FilterByDistrict /><br />
          <FilterByBuilding /><br />
          <FilterByClass /><br />
          <FilterByStudent /><br /><br />
          <FilterDownload />
        </Grid>{" "}
      </Grid>
    </Wrapper>
  );
};
