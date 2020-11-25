import * as React from 'react';
import { FC } from 'react';
import {
    Datagrid,
    Edit,
    EditProps,
    EditButton,
    FieldProps,
    NumberField,
    TextField,
    ReferenceManyField,
    SimpleForm,
    TextInput,
    useTranslate,
} from 'react-admin';

import ThumbnailField from '../products/ThumbnailField';
import { Category } from '../types';

const CategoryTitle: FC<FieldProps<Category>> = ({ record }) => {
    const translate = useTranslate();
    return record ? (
        <span>
            {translate('resources.categories.name', { smart_count: 1 })} &quot;
            {record.name}&quot;
        </span>
    ) : null;
};

const CategoryEdit: FC<EditProps> = props => (
    <Edit title={<CategoryTitle />} {...props} undoable={false}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceManyField
                reference="products"
                target="category_id"
                label="resources.categories.fields.products"
                perPage={20}
                fullWidth
            >
                <Datagrid>
                    <ThumbnailField />
                    <TextField source="name" />
                    <NumberField
                        source="retail_price"
                        
                    />
                   
                    <NumberField source="stock" />
                    <NumberField source="sell_volume" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);

export default CategoryEdit;
