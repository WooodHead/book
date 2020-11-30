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
import NullableDateField from '../components/NullableDateField';

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
            <NullableDateField source="date" format="YYYY-MM-DD hh:mm" />
            <ReferenceField source="user_id" reference="customers">
                <FullNameField /> 
            </ReferenceField>
            <TextField source="title"/>
            <NumberField source="total" />
        </Datagrid>
    </List>
);

export default InvoiceList;
