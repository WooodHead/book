import React, { useState, useEffect } from "react";
import { FC } from "react";
import {
  Datagrid,
  DateField,
  Edit,
  EditButton,
  EditProps,
  FormTab,
  NumberInput,
  Pagination,
  ReferenceInput,
  ReferenceManyField,
  required,
  SelectInput,
  TabbedForm,
  TextField,
  TextInput,
  DateInput,
  BooleanInput,
} from "react-admin";
import { Box, Card, CardContent, Typography } from "@material-ui/core";

// import { InputAdornment } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import RichTextInput from "ra-input-rich-text";

import CustomerReferenceField from "../visitors/CustomerReferenceField";
import StarRatingField from "../reviews/StarRatingField";
// import Poster from './Poster';
import { styles as createStyles } from "./ProductCreate";
import { Product } from "../types";
import ImagePicker from "./ImagePicker";
// import { AnyIfEmpty } from 'react-redux';
import AgeSegmentInput from "./AgeSegmentInput";
interface ProductTitleProps {
  record?: Product;
}

const ProductTitle: FC<ProductTitleProps> = ({ record }) =>
  record ? <span>Poster #{record.reference}</span> : null;

const useStyles = makeStyles({
  ...createStyles,
  comment: {
    maxWidth: "20em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  tab: {
    maxWidth: "40em",
    display: "block",
  },
});

const ProductEdit: FC<EditProps> = (props: any) => {
  const classes = useStyles();
  const { record } = props;

  const transform = (data: any) => {
    console.log("imageUrl", data);
    return {
      ...data,
    };
  };

  return (
    <Edit
      {...props}
      title={<ProductTitle />}
      transform={transform}
      undoable={false}
    >
      <TabbedForm>
        <FormTab
          label="resources.products.tabs.image"
          contentClassName={classes.tab}
        >
          {/* <Poster /> */}
          <ImagePicker source="primary_pic_url" />
        </FormTab>
        <FormTab
          label="resources.products.tabs.details"
          path="details"
          contentClassName={classes.tab}
        >
          <Box display="flex">
            <Box flex={2} mr={{ md: 0, lg: "1em" }}>
              <TextInput
                source="ISBN"
                label="resources.products.ISBN"
                style={{ width: "360px" }}
                validate={required()}
              />
              <TextInput
                source="name"
                label="resources.products.productName"
                validate={requiredValidate}
                fullWidth
              />

              <ReferenceInput
                source="category_id"
                reference="categories"
                validate={requiredValidate}
                label="resources.products.category"
                fullWidth
              >
                <SelectInput source="name" fullWidth/>
              </ReferenceInput>
              <NumberInput
                source="stock"
                label="resources.products.stock"
                className={classes.stock}
                validate={requiredValidate}
              />

              <TextInput
                source="author"
                label="resources.products.author"
                fullWidth
              />
              <TextInput
                source="publisher"
                label="resources.products.publisher"
                fullWidth
              />
              <TextInput
                source="stock_location"
                label="resources.products.stock_location"
                fullWidth
              />
              <DateInput
                source="publishdate"
                label="resources.products.publishdate"
              />
            </Box>
            <Box flex={1} ml="1em">
              <AgeSegmentInput
                source="ageRange"
                label="resources.products.ageRange"
              />
              <BooleanInput source="is_hot" label="resources.products.hot" />
              <BooleanInput source="is_new" label="resources.products.new" />
              <BooleanInput
                source="is_on_sale"
                label="resources.products.available"
              />
           
            </Box>
          </Box>
        </FormTab>
        <FormTab
          label="resources.products.tabs.description"
          path="description"
          contentClassName={classes.tab}
        >
          <RichTextInput
            source="goods_desc"
            label=""
            validate={requiredValidate}
          />
        </FormTab>
        <FormTab label="resources.products.tabs.reviews" path="reviews">
          <ReferenceManyField
            reference="reviews"
            target="value_id"
            addLabel={false}
            pagination={<Pagination />}
            fullWidth
          >
            <Datagrid>
              <DateField source="date" />
              <CustomerReferenceField />
              <StarRatingField />
              <TextField source="comment" cellClassName={classes.comment} />
              <TextField source="status" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

const requiredValidate = [required()];

export default ProductEdit;
