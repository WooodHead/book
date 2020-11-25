import * as React from 'react';
import { FC } from 'react';
import {
    // BooleanInput,
    DateField,
    Edit,
    EditProps,
    FormWithRedirect,
    Labeled,
    ReferenceField,
    SelectInput,
    TextField,
    Toolbar,
    useTranslate,
} from 'react-admin';
import { Link as RouterLink } from 'react-router-dom';
import {
    Card,
    CardContent,
    Box,
    Grid,
    Typography,
    Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Order, Customer } from '../types';
import Basket from './Basket';
// import Totals from './Totals';
// import AddressField from '../visitors/AddressField';

interface OrderTitleProps {
    record?: Order;
}

const OrderTitle: FC<OrderTitleProps> = ({ record }) => {
    const translate = useTranslate();
    return record ? (
        <span>
            {translate('resources.commands.title', {
                reference: record.order_sn,
            })}
        </span>
    ) : null;
};

const CustomerDetails = ({ record }: { record?: Customer }) => (
    <Box display="flex" flexDirection="column">
        <Typography
            component={RouterLink}
            color="primary"
            to={`/customers/${record?.id}`}
            style={{ textDecoration: 'none' }}
        >
            {record?.nickname}
        </Typography>
        <Typography
            component={Link}
            color="primary"
            href={`mailto:${record?.email}`}
            style={{ textDecoration: 'none' }}
        >
            {record?.email}
        </Typography>
    </Box>
);

const CustomerAddress = ({ record }: { record?: Order }) => {
    console.log('order',record)
    return(
        null
    )
}


const useEditStyles = makeStyles({
    root: { alignItems: 'flex-start' },
});

const Spacer = () => <Box m={1}>&nbsp;</Box>;

const OrderForm = (props: any) => {
    const translate = useTranslate();
    console.log('formProps.record', props.record);
    return (
        <FormWithRedirect
            {...props}
            render={(formProps: any) => (
                <Box maxWidth="50em">
                    <Card>
                        <CardContent>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={12} md={8}>
                                    <Typography variant="h6" gutterBottom>
                                        {translate(
                                            'resources.commands.section.order'
                                        )}
                                    </Typography>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Labeled
                                                source="add_time"
                                                resource="commands"
                                            >
                                                <DateField
                                                    source="add_time"
                                                    resource="commands"
                                                    record={formProps.record}
                                                />
                                            </Labeled>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Labeled
                                                source="order_sn"
                                                resource="commands"
                                            >
                                                <TextField
                                                    source="order_sn"
                                                    resource="commands"
                                                    record={formProps.record}
                                                />
                                            </Labeled>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <SelectInput
                                                resource="commands"
                                                source="status"
                                                choices={[
                                                    {
                                                        id: 'delivered',
                                                        name: '已发货',
                                                    },
                                                    {
                                                        id: 'ordered',
                                                        name: '新订单',
                                                    },
                                                    {
                                                        id: 'cancelled',
                                                        name: '已取消',
                                                    },
                                                    {
                                                        id: 'unknown',
                                                        name: '未定义',
                                                        disabled: true,
                                                    },
                                                ]}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Box mt={2}>
                                            <Labeled
                                                source="shipping_time"
                                                resource="commands"
                                            >
                                                <TextField
                                                    source="shipping_time"
                                                    resource="commands"
                                                    record={formProps.record}
                                                />
                                            </Labeled>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Box mt={2}>
                                            <Labeled
                                                source="receiving_time"
                                                resource="commands"
                                            >
                                                <TextField
                                                    source="receiving_time"
                                                    resource="commands"
                                                    record={formProps.record}
                                                />
                                            </Labeled>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Box mt={2}>
                                            <Labeled
                                                source="return_time"
                                                resource="commands"
                                            >
                                                <TextField
                                                    source="return_time"
                                                    resource="commands"
                                                    record={formProps.record}
                                                />
                                            </Labeled>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Box mt={2}>
                                            <Labeled
                                                source="expired_time"
                                                resource="commands"
                                            >
                                                <TextField
                                                    source="expired_time"
                                                    resource="commands"
                                                    record={formProps.record}
                                                />
                                            </Labeled>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Box mt={2}>
                                            <Labeled
                                                source="late_fee"
                                                resource="commands"
                                            >
                                                <TextField
                                                    source="late_fee"
                                                    resource="commands"
                                                    record={formProps.record}
                                                />
                                            </Labeled>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Typography variant="h6" gutterBottom>
                                        {translate(
                                            'resources.commands.section.customer'
                                        )}
                                    </Typography>
                                    <ReferenceField
                                        source="user_id"
                                        resource="commands"
                                        reference="customers"
                                        basePath="/customers"
                                        record={formProps.record}
                                        link={false}
                                    >
                                        <CustomerDetails />
                                    </ReferenceField>
                                    <Spacer />
                                    <Typography variant="h6" gutterBottom>
                                        {translate(
                                            'resources.commands.section.shipping_address'
                                        )}
                                    </Typography>
                                    <ReferenceField
                                        source="province"
                                        reference="region"
                                        link={false}
                                        {...props}
                                    >
                                        <TextField source="name" />
                                    </ReferenceField>{' '}
                                    <ReferenceField
                                        source="city"
                                        reference="region"
                                        link={false}
                                        {...props}
                                    >
                                        <TextField source="name" />
                                    </ReferenceField>{' '}
                                    <ReferenceField
                                        source="district"
                                        reference="region"
                                        link={false}
                                        {...props}
                                    >
                                        <TextField source="name" />
                                    </ReferenceField>{' '}
                                    <TextField
                                        source="address"
                                        resource="commands"
                                        record={formProps.record}
                                    />
                                    
                                </Grid>
                            </Grid>
                            <Spacer />

                            <Typography variant="h6" gutterBottom>
                                {translate('resources.commands.section.items')}
                            </Typography>
                            <Box>
                                <Basket record={formProps.record} />
                            </Box>
                            <Spacer />

                           
                        </CardContent>
                        <Toolbar
                            record={formProps.record}
                            basePath={formProps.basePath}
                            undoable={true}
                            invalid={formProps.invalid}
                            handleSubmit={formProps.handleSubmit}
                            saving={formProps.saving}
                            resource="commands"
                        />
                    </Card>
                </Box>
            )}
        />
    );
};
const OrderEdit: FC<EditProps> = props => {
    const classes = useEditStyles();
    return (
        <Edit
            undoable={false}
            title={<OrderTitle />}
            classes={classes}
            {...props}
            component="div"
        >
            <OrderForm />
        </Edit>
    );
};

export default OrderEdit;
