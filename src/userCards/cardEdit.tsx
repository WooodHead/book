import React from 'react';
import { FC } from 'react';
import {
    Edit,
    SimpleForm,
    required,
    TextInput,
    NumberInput,
    EditProps,
    useTranslate,
    Toolbar,
    SaveButton,
} from 'react-admin';
import Button from '@material-ui/core/Button';

interface Props extends EditProps {
    onCancel: () => void;
}

const CardCreateToolbar: FC<Props> = ({ onCancel, ...props }) => {
    const translate = useTranslate();
    return (
        <Toolbar {...props}>
            <SaveButton></SaveButton>
            <Button onClick={onCancel}>{translate('ra.action.cancel')}</Button>
        </Toolbar>
    );
};

const CardCreate: FC<Props> = ({ onCancel, ...props }) => (
    <Edit {...props} title=" " undoable={false}>
        <SimpleForm toolbar={<CardCreateToolbar onCancel={onCancel} />}>
            <NumberInput source="orderNumber" validate={required()} />
            <TextInput source="name" validate={required()} />
            <TextInput source="remark" validate={required()} />
            <NumberInput source="price" validate={required()} />
            <NumberInput source="useTimes" validate={required()} />
            <NumberInput source="duration" validate={required()} />
            <NumberInput source="discount_price" />
        </SimpleForm>
    </Edit>
);

export default CardCreate;
