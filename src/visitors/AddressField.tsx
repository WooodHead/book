import * as React from 'react';
import { FC } from 'react';
import { ReferenceFieldProps, ReferenceField, TextField } from 'react-admin';

interface Props {
    source?: string;
}

const AddressField: FC<
    Props & Omit<Omit<ReferenceFieldProps, 'source'>, 'reference' | 'children'>
> = props => (
    <>
        <ReferenceField source="province" label="address" reference="region" link={false} {...props}>
            <TextField source="name" />
        </ReferenceField>{' '}
        <ReferenceField source="city" reference="region" link={false} {...props}>
            <TextField source="name" />
        </ReferenceField>{' '}
        <ReferenceField source="district" reference="region" link={false} {...props}>
            <TextField source="name" />
        </ReferenceField>{' '}
        <span>{props.record!.address}</span>
    </>
);

AddressField.defaultProps = {
    label: 'resources.commands.fields.address',
};

export default AddressField;
