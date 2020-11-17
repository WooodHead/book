import React from 'react';
import { FC } from 'react';
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
    // Transform
} from 'react-admin';
// import { InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';
import ImageFile from './ImagePicker';

export const styles = {
    price: { width: '7em' },
    width: { width: '7em' },
    height: { width: '7em' },
    stock: { width: '7em' },
    widthFormGroup: { display: 'inline-block' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

const useStyles = makeStyles(styles);


const ProductCreate: FC<CreateProps> = props => {
    const classes = useStyles();
    
    const transform = (data: any) => {
        console.log('state', data)
        return {
            ...data,
            
        };
    };
    return (
        <Create {...props} transform={transform}>
            <TabbedForm>
                <FormTab label="resources.products.tabs.image">
                    <ImageFile
                        source="primary_pic_url"
                       
                    />
                </FormTab>
                <FormTab label="resources.products.tabs.details" path="details">
                    <TextInput
                        source="ISBN"
                        label="resources.products.ISBN"
                        validate={required()}
                    />
                    <TextInput
                        source="name"
                        validate={required()}
                        label="resources.products.name"
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
                    /> */}
                    <ReferenceInput
                        source="category_id"
                        reference="categories"
                        allowEmpty
                    >
                        <SelectInput
                            source="name"
                            label="resources.products.category"
                        />
                    </ReferenceInput>
                    <NumberInput
                        source="stock"
                        label="resources.products.stock"
                        validate={required()}
                        className={classes.stock}
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
                >
                    <RichTextInput source="goods_desc" label="" />
                </FormTab>
            </TabbedForm>
        </Create>
    );
};

export default ProductCreate;
