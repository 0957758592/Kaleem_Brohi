import React from "react";
import SelectItem from "@/components/Select";

const event = [
  { name: " ", value: "" },
  { name: "event 1", value: "1" },
  { name: "event 2", value: "2" },
];

export default function FilterByEvent() {
  return <SelectItem name="event" options={event}/>;
}
