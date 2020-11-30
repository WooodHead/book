import React from "react";
import { BooleanFieldProps } from "react-admin";

const NullableBooleanField = (props: BooleanFieldProps) => {
  return props.record && props.source ? (
    <span> {props.record[props.source] ? "Y" : "N"}</span>
  ) : null;
};

export default NullableBooleanField;
