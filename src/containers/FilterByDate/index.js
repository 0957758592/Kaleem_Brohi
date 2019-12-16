import React, { Component } from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import { DateRangePicker } from "react-dates";
import { STORE_KEYS } from "@/stores";

class FilterByDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
  }

  handleChange = ({ startDate, endDate }) => {
    const { setPostQuery } = this.props;
    if (startDate && !endDate) {
      this.setState({ startDate, endDate });
      setPostQuery("fromdate", moment(startDate).valueOf())
    }
    if (endDate) {
      this.setState({ endDate });
      setPostQuery("todate", moment(endDate).valueOf())
    }
  };

  render() {
    return (
      <div>
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={this.handleChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => {
            this.setState({ focusedInput });
          }}
        />
      </div>
    );
  }
}

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setPostQuery } }) => ({
    setPostQuery
  }))
)(FilterByDate);
