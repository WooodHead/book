import React from 'react';
import { FC } from 'react';
import {
    Datagrid,
    List,
    TextField,
    NumberField,
    ListProps,
    TopToolbar,
    CreateButton,
    EditButton,
} from 'react-admin';
import { Route, useHistory } from 'react-router';
import CardCreate from './cardCreate';
import CardEdit from './cardEdit';
import { Drawer } from '@material-ui/core';

interface Props {
    basePath?: string;
}

const CardListActions: FC<Props> = ({ basePath }) => {
    return (
        <TopToolbar>
            <CreateButton basePath={basePath} />
        </TopToolbar>
    );
};

const CardList: FC<ListProps> = ({ classes, ...props }) => {
    const history = useHistory();
    return (
        <React.Fragment>
            <List
                {...props}
                sort={{
                    field: 'orderNumber',
                    order: 'ASC',
                }}
                actions={<CardListActions />}
            >
                <Datagrid>
                    <NumberField source="orderNumber" />
                    <TextField source="name" />
                    <NumberField source="useTimes" />
                    <NumberField source="duration" />
                    <NumberField source="price" />
                    <NumberField source="discount_price" />
                    <TextField source="remark" />
                    <EditButton />
                </Datagrid>
            </List>
            <Route path="/usercards/create">
                {({ match }) => (
                    <Drawer
                        open={!!match}
                        anchor="right"
                        onClose={() => history.push('/usercards')}
                    >
                        <CardCreate
                            {...props}
                            onCancel={() => history.push('/usercards')}
                        />
                    </Drawer>
                )}
            </Route>
            <Route path="/usercards/:id">
                {({ match }) => {
                    const isMatch =
                        match && match.params && match.params.id !== 'create';

                    return (
                        <Drawer
                            open={isMatch}
                            anchor="right"
                            onClose={() => history.push('/usercards')}
                        >
                            {isMatch ? (
                                <CardEdit
                                    id={isMatch ? match!.params.id : null}
                                    onCancel={() => history.push('/usercards')}
                                    {...props}
                                />
                            ) : (
                                <div />
                            )}
                        </Drawer>
                    );
                }}
            </Route>
        </React.Fragment>
    );
};

export default CardList;
