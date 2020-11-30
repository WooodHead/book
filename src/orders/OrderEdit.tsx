import * as React from "react";
import { FC } from "react";
import {
  Edit,
  EditProps,
  FormWithRedirect,
  Labeled,
  ReferenceField,
  TextField,
  Toolbar,
  useTranslate,
} from "react-admin";

import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardContent,
  Box,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Order, Customer } from "../types";
import Basket from "./Basket";
import NullableDateField from "../components/NullableDateField";
import {
  DeliveredButton,
  ReceivedButton,
  ReturnButton,
} from "./OrderStatusButtons";

interface OrderTitleProps {
  record?: Order;
}

const OrderTitle: FC<OrderTitleProps> = ({ record }) => {
  const translate = useTranslate();
  return record ? (
    <span>
      {translate("resources.commands.title", {
        reference: record.order_sn,
      })}
    </span>
  ) : null;
};

const CustomerDetails = ({ record }: { record?: Customer }) => (
  <Box display="flex" flexDirection="column">
    <Typography
      component={RouterLink}
      color="primary"
      to={`/customers/${record?.id}`}
      style={{ textDecoration: "none" }}
    >
      {record?.nickname}
    </Typography>
    <Typography
      component={Link}
      color="primary"
      href={`mailto:${record?.email}`}
      style={{ textDecoration: "none" }}
    >
      {record?.email}
    </Typography>
  </Box>
);

const useEditStyles = makeStyles({
  root: { alignItems: "flex-start" },
});

const Spacer = () => <Box m={1}>&nbsp;</Box>;

const OrderToolbar = (props: any) => (
  <Toolbar {...props}>
    <DeliveredButton {...props} />
    <ReceivedButton {...props} />
    <ReturnButton {...props} />
  </Toolbar>
);

const OrderForm = (props: any) => {
  const translate = useTranslate();
  return (
    <FormWithRedirect
      {...props}
      render={(formProps: any) => (
        <Box maxWidth="50em">
          <OrderToolbar {...props} />
          <Card>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={8}>
                  <Typography variant="h6" gutterBottom>
                    {translate("resources.commands.section.order")}
                  </Typography>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                      <Labeled source="add_time" resource="commands">
                        <NullableDateField
                          source="add_time"
                          resource="commands"
                          record={formProps.record}
                        />
                      </Labeled>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Labeled source="order_sn" resource="commands">
                        <TextField
                          source="order_sn"
                          resource="commands"
                          record={formProps.record}
                        />
                      </Labeled>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                      <Labeled source="order_status" resource="commands">
                        <TextField
                          source="order_status_text"
                          resource="commands"
                          record={formProps.record}
                        />
                      </Labeled>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Labeled source="shipping_time" resource="commands">
                        <NullableDateField
                          source="shipping_time"
                          resource="commands"
                          record={formProps.record}
                        />
                      </Labeled>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Labeled source="receiving_time" resource="commands">
                        <NullableDateField
                          source="receiving_time"
                          resource="commands"
                          record={formProps.record}
                        />
                      </Labeled>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Labeled source="return_time" resource="commands">
                        <NullableDateField
                          source="return_time"
                          resource="commands"
                          record={formProps.record}
                        />
                      </Labeled>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Labeled source="expired_time" resource="commands">
                        <NullableDateField
                          source="expired_time"
                          resource="commands"
                          record={formProps.record}
                        />
                      </Labeled>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Labeled source="late_fee" resource="commands">
                        <TextField
                          source="late_fee"
                          resource="commands"
                          record={formProps.record}
                        />
                      </Labeled>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Typography variant="h6" gutterBottom>
                    {translate("resources.commands.section.customer")}
                  </Typography>
                  <ReferenceField
                    source="user_id"
                    resource="commands"
                    reference="customers"
                    basePath="/customers"
                    record={formProps.record}
                    link={false}
                  >
                    <CustomerDetails />
                  </ReferenceField>
                  <Spacer />
                  <Typography variant="h6" gutterBottom>
                    {translate("resources.commands.section.shipping_address")}
                  </Typography>
                  <ReferenceField
                    source="province"
                    reference="region"
                    link={false}
                    {...props}
                  >
                    <TextField source="name" />
                  </ReferenceField>{" "}
                  <ReferenceField
                    source="city"
                    reference="region"
                    link={false}
                    {...props}
                  >
                    <TextField source="name" />
                  </ReferenceField>{" "}
                  <ReferenceField
                    source="district"
                    reference="region"
                    link={false}
                    {...props}
                  >
                    <TextField source="name" />
                  </ReferenceField>{" "}
                  <TextField
                    source="address"
                    resource="commands"
                    record={formProps.record}
                  />
                  <Spacer />
                  <Typography variant="h6" gutterBottom>
                    {translate("resources.commands.fields.relateCard")}
                  </Typography>
                  <ReferenceField
                    source="mycard_id"
                    reference="mycards"
                    basePath="/mycards"
                    record={formProps.record}
                  >
                    <TextField source="name" />
                  </ReferenceField>
                </Grid>
              </Grid>
              <Spacer />

              <Typography variant="h6" gutterBottom>
                {translate("resources.commands.section.items")}
              </Typography>
              <Box>
                <Basket record={formProps.record} />
              </Box>
              <Spacer />
            </CardContent>
            {/* <Toolbar
              record={formProps.record}
              basePath={formProps.basePath}
              undoable={true}
              invalid={formProps.invalid}
              handleSubmit={formProps.handleSubmit}
              saving={formProps.saving}
              resource="commands"
            /> */}
          </Card>
        </Box>
      )}
    />
  );
};
const OrderEdit: FC<EditProps> = (props) => {
  const classes = useEditStyles();
  return (
    <Edit
      undoable={false}
      title={<OrderTitle />}
      classes={classes}
      {...props}
      component="div"
    >
      <OrderForm />
    </Edit>
  );
};

export default OrderEdit;
