import * as React from 'react';
import { FC } from 'react';
import { ReferenceField, ReferenceFieldProps } from 'react-admin';

import FullNameField from './FullNameField';

const CustomerReferenceField: FC<
    Omit<ReferenceFieldProps, 'reference' | 'children' | 'source'> & {
        source?: string;
    }
> = props => (
    <ReferenceField source="user_id" reference="customers" {...props} label="resources.customers.fields.name">
        <FullNameField />
    </ReferenceField>
);

CustomerReferenceField.defaultProps = {
    source: 'user_id',
    label:"resources.customers.fields.name",
    addLabel: true,
};

export default CustomerReferenceField;
