import * as React from 'react';
import { FC } from 'react';
import {
    List,
    ListProps,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
    NumberField,
    Filter,
    FilterProps,
    DateInput,
} from 'react-admin';
import { useLocale } from 'react-admin'

import FullNameField from '../visitors/FullNameField';
//import InvoiceShow from './InvoiceShow';

const ListFilters = (props: Omit<FilterProps, 'children'>) => (
    <Filter {...props}>
        <DateInput source="date_gte" alwaysOn />
        <DateInput source="date_lte" alwaysOn />
    </Filter>
);

const InvoiceList: FC<ListProps> = props => (
    <List
        {...props}
        filters={<ListFilters />}
        perPage={25}
        sort={{ field: 'date', order: 'desc' }}
    >
        <Datagrid>
           
            <DateField source="date" />
            <ReferenceField source="user_id" reference="customers">
                <FullNameField />
            </ReferenceField>
            <ReferenceField
                source="card_id"
                reference="usercards"
                link={false}
                label="resources.invoices.fields.cardname"
            >
                <TextField source="name"/>
            </ReferenceField>
           
            <NumberField source="total" />
        </Datagrid>
    </List>
);

export default InvoiceList;
