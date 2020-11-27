import * as React from "react";
import { FC } from "react";
import { FieldProps } from "react-admin";
import get from "lodash/get";
import moment from "moment";

interface OwnProps {
  format?: string;
  source: string;
}
const NullableDateField: FC<FieldProps & OwnProps> = ({
  record,
  format = "YYYY-MM-DD",
  source,
}) => {
 
  return record ? (
    <span>
      {record[source] ? moment.unix(record[source]).format(format) : '-'}
    </span>
  ) : null;
};
export default NullableDateField;
