import React from "react";
import SelectItem from "@/components/Select";

const test = [
  { name: "All" },
  { name: "Math" },
  { name: "Reading" },
];

export default function FilterByTest() {
  return <SelectItem name="Test" options={test} />;
}
