import * as React from "react";
import { FC } from "react";

import {
  List,
  ListProps,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
  TextInput,
  Filter,
  FilterProps,
  DateInput,
} from "react-admin";
import NullableBooleanField from "../components/NullableBooleanField";
import NullableDateField from "../components/NullableDateField";
import FullNameField from "../visitors/FullNameField";

const ListFilters = (props: Omit<FilterProps, "children">) => {
  return (
    <Filter {...props}>
      <TextInput
        source="q"
        alwaysOn
        label="resources.customers.filters.keyword"
      />
      <DateInput
        source="date_gte"
        alwaysOn
        label="resources.commands.fields.date_gte"
      />
      <DateInput
        source="date_lte"
        alwaysOn
        label="resources.commands.fields.date_lte"
      />
    </Filter>
  );
};

const MyCardList: FC<ListProps> = (props) => {
  return (
    <List
      {...props}
      filters={<ListFilters />}
      perPage={25}
      sort={{ field: "date", order: "desc" }}
    >
      <Datagrid>
        <NullableDateField source="date" format="YYYY-MM-DD hh:mm" />
        <ReferenceField
          source="user_id"
          reference="customers"
          label="resources.customers.fields.nickname"
        >
          <FullNameField />
        </ReferenceField>
        <ReferenceField
          source="card_id"
          reference="usercards"
          label="resources.invoices.fields.cardname"
        > 
          <TextField source="name" />
        </ReferenceField>
        <NullableDateField source="activateDate" format="YYYY-MM-DD hh:mm" />
        <NullableDateField source="expiredDate" format="YYYY-MM-DD hh:mm" />
        <NumberField source="useTimes" />
        <NumberField source="leftTimes" />
        <NullableBooleanField source="isValid" align="right" />
      </Datagrid>
    </List>
  );
};

export default MyCardList;
