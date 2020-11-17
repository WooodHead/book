import  React, { useState,useEffect } from 'react';
import { FC } from 'react';
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
} from 'react-admin';
// import { InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';

import CustomerReferenceField from '../visitors/CustomerReferenceField';
import StarRatingField from '../reviews/StarRatingField';
// import Poster from './Poster';
import { styles as createStyles } from './ProductCreate';
import { Product } from '../types';
import ImagePicker from './ImagePicker';
// import { AnyIfEmpty } from 'react-redux';

interface ProductTitleProps {
    record?: Product;
}

const ProductTitle: FC<ProductTitleProps> = ({ record }) =>
    record ? <span>Poster #{record.reference}</span> : null;

const useStyles = makeStyles({
    ...createStyles,
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    tab: {
        maxWidth: '40em',
        display: 'block',
    },
});



const ProductEdit: FC<EditProps> = (props:any) => {
    const classes = useStyles();
    const { record } = props;
    
    const transform = (data: any) => {
       console.log('imageUrl', data)
        return {
            ...data,
        
        };
    };

    

    return (
        <Edit {...props} title={<ProductTitle />} transform={transform} undoable={false}>
            <TabbedForm>
                <FormTab
                    label="resources.products.tabs.image"
                    contentClassName={classes.tab}
                >
                    {/* <Poster /> */}
                    <ImagePicker source="primary_pic_url"
                        
                       
                    />
                </FormTab>
                <FormTab
                    label="resources.products.tabs.details"
                    path="details"
                    contentClassName={classes.tab}
                >
                    <TextInput
                        source="ISBN"
                        label="resources.products.ISBN"
                        validate={required()}
                    />
                    <TextInput
                        source="name"
                        label="resources.products.productName"
                        validate={requiredValidate}
                    />
                    {/* <NumberInput
                        source="retail_price"
                        label="resources.products.retail_price"
                        className={classes.price}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    ¥
                                </InputAdornment>
                            ),
                        }}
                        validate={requiredValidate}
                    /> */}

                    <ReferenceInput
                        source="category_id"
                        reference="categories"
                        validate={requiredValidate}
                    >
                        <SelectInput
                            source="name"
                            label="resources.products.category"
                        />
                    </ReferenceInput>
                    <NumberInput
                        source="stock"
                        label="resources.products.stock"
                        className={classes.stock}
                        validate={requiredValidate}
                    />
                    <NumberInput
                        source="sell_volume"
                        className={classes.stock}
                        validate={requiredValidate}
                    />
                    <TextInput
                        source="author"
                        label="resources.products.author"
                    />
                    <TextInput
                        source="publisher"
                        label="resources.products.publisher"
                    />
                    <TextInput
                        source="stock_location"
                        label="resources.products.stock_location"
                    />
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
                            <TextField
                                source="comment"
                                cellClassName={classes.comment}
                            />
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
