import React from "react";
import { FC } from "react";
import {
  Create,
  FormTab,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TabbedForm,
  TextInput,
  required,
  CreateProps,
  BooleanInput,
  DateInput,
  useTranslate,
  // Transform
} from "react-admin";
// import { InputAdornment } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import RichTextInput from "ra-input-rich-text";
import ImageFile from "./ImagePicker";
import AgeSegmentInput from "./AgeSegmentInput";
import { Box, Card, CardContent, Typography } from "@material-ui/core";

export const styles = {
  price: { width: "7em" },
  width: { width: "7em" },
  height: { width: "7em" },
  stock: { width: "7em" },
  widthFormGroup: { display: "inline-block" },
  heightFormGroup: { display: "inline-block", marginLeft: 32 },
};

const useStyles = makeStyles(styles);

const ProductCreate: FC<CreateProps> = (props) => {
  const classes = useStyles();

  const translate = useTranslate();
  return (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="resources.products.tabs.image">
          <ImageFile source="primary_pic_url"/>
        </FormTab>
        <FormTab label="resources.products.tabs.details" path="details">
          <Box display="flex">
            <Box flex={2} mr={{ md: 0, lg: "1em" }}>
              <TextInput
                source="ISBN"
                label="resources.products.ISBN"
                validate={required()}
                style={{ width: "360px" }}
                fullWidth
              />

              <TextInput
                source="name"
                validate={required()}
                label="resources.products.productName"
                fullWidth
              />

              <ReferenceInput
                source="category_id"
                reference="categories"
                allowEmpty
                fullWidth
                label="resources.products.category"
              >
                <SelectInput source="name" />
              </ReferenceInput>

              <NumberInput
                source="stock"
                label="resources.products.stock"
                validate={required()}
                className={classes.stock}
                fullWidth
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
                fullWidth
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
        <FormTab label="resources.products.tabs.description" path="description">
          <RichTextInput source="goods_desc" label="" />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default ProductCreate;
