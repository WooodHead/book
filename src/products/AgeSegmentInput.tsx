import * as React from "react";
import { FC } from "react";
import { useTranslate, SelectInput, InputProps } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

import segments from "./AgeSegmentData";

const useStyles = makeStyles({
  input: { width: 150 },
});

interface Props extends Omit<InputProps, "source"> {
  source?: string;
}

const AgeSegmentInput: FC<Props> = (props) => {
  const translate = useTranslate();
  const classes = useStyles();
  return (
    <SelectInput
      {...props}
      choices={segments.map((segment) => ({
        id: segment.id,
        name: translate(segment.name),
      }))}
      className={classes.input}
    />
  );
};


export default AgeSegmentInput;