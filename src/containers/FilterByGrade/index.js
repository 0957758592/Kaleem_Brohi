import React from "react";
import SelectItem from "@/components/Select";

const grade = [
  { name: " " },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
  { name: 7 },
  { name: 8 }
];

export default function FilterByGrade() {
  return <SelectItem name="Grade" options={grade} />;
}
