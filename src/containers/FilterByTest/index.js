import React from "react";
import SelectItem from "@/components/Select";

const test = [
  { name: " ", value: "" },
  { name: "Math", value: "M" },
  { name: "Reading", value: "R" },
];

export default function FilterByTest() {
  return <SelectItem name="Test" options={test}/>;
}
