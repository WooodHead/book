import React from "react";
import { FC } from "react";
import {
  useUpdate,
  Button,
  useTranslate,
  useRefresh,
  useNotify,
} from "react-admin";
import { Order } from "../types";

//设置为已发货
const DeliveredButton: FC<Order> = ({ record}) => {
  const translate = useTranslate();
  const refresh = useRefresh();
  const notify = useNotify();
  const [statusUpdate, { loading,error }] = useUpdate(
    "commands",
    record.id,
    { order_status: 300 },
    record,
    {
      undoable: false,
      onSuccess: () => {
        notify(translate("pos.notification.handle_success"), "info");
        refresh();
      },
      onFailure: () => {
        notify(error, "warning");
      },
    }
  );

  return record.order_status === 201 ? (
    <Button
      label="resources.commands.delivered"
      onClick={statusUpdate}
      disabled={loading}
    />
  ) : null;
};

//设置为已收货
const ReceivedButton: FC<Order> = ({ record}) => {
  const translate = useTranslate();
  const refresh = useRefresh();
  const notify = useNotify();
  const [statusUpdate, { loading,error }] = useUpdate(
    "commands",
    record.id,
    { order_status: 301 },
    record,
    {
      undoable: false,
      onSuccess: () => {
        notify(translate("pos.notification.handle_success"), "info");
        refresh();
      },
      onFailure: () => {
        notify(error, "warning");
      },
    }
  );
  return record.order_status === 300 ? (
    <Button
      label="resources.commands.received"
      onClick={statusUpdate}
      disabled={loading}
    />
  ) : null;
};

//设置为已还书
const ReturnButton: FC<Order> = ({ record}) => {
  const translate = useTranslate();
  const refresh = useRefresh();
  const notify = useNotify();
  const [statusUpdate, { loading,error }] = useUpdate(
    "commands",
    record.id,
    { order_status: 502 },
    record,
    {
      undoable: false,
      onSuccess: () => {
        notify(translate("pos.notification.handle_success"), "info");
        refresh();
      },
      onFailure: () => {
        notify(error, "warning");
      },
    }
  );
  return record.order_status === 501 ? (
    <Button
      label="resources.commands.returning"
      onClick={statusUpdate}
      disabled={loading}
    ></Button>
  ) : null;
};

export { DeliveredButton, ReceivedButton, ReturnButton };
