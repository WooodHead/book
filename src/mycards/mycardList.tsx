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
    NumberInput,
    Filter,
    FilterProps,
    DateInput,
    BooleanField,
} from 'react-admin';

import FullNameField from '../visitors/FullNameField';

const ListFilters = (props: Omit<FilterProps, 'children'>) => (
    <Filter {...props}>
        <NumberInput source="mobile" alwaysOn label="resources.customers.fields.mobile"/>
        <DateInput source="date_gte" alwaysOn label="resources.commands.fields.date_gte"/>
        <DateInput source="date_lte" alwaysOn label="resources.commands.fields.date_lte"/>
    </Filter>
);

const MyCardList: FC<ListProps> = props => {
    return (
        <List
            {...props}
            filters={<ListFilters />}
            perPage={25}
            sort={{ field: 'date', order: 'desc' }}
        >
            <Datagrid>
                <DateField source="date" />
                <ReferenceField source="user_id" reference="customers" label="resources.customers.fields.name">
                    <FullNameField />
                </ReferenceField>
                <ReferenceField source="card_id" reference="usercards" label="resources.invoices.fields.cardname">
                    <TextField source="name"/>
                </ReferenceField>
                <DateField source="activateDate" locales="zh-cn" />
                <DateField source="expiredDate" locales="zh-cn" />
                <NumberField source="useTimes" />
                <NumberField source="leftTimes" />
                <BooleanField source="isValid" />
            </Datagrid>
        </List>
    );
};

export default MyCardList;
