import * as React from "react";
import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, FieldProps, useTranslate, useQueryWithStore } from "react-admin";

import { AppState, Order, Product } from "../types";

const useStyles = makeStyles({
  rightAlignedCell: { textAlign: "right" },
});

const Basket: FC<FieldProps<Order>> = ({ record }) => {
  const classes = useStyles();
  const translate = useTranslate();

  const { loaded, data: products } = useQueryWithStore<AppState>(
    {
      type: "getMany",
      resource: "products",
      payload: {
        ids: record ? record.basket.map((item) => item.product_id) : [],
      },
    },
    {},
    (state) => {
      const productIds = record
        ? record.basket.map((item) => item.product_id)
        : [];

      return productIds
        .map<Product>(
          (productId) =>
            state.admin.resources.products.data[productId] as Product
        )
        .filter((r) => typeof r !== "undefined")
        .reduce((prev, next) => {
          prev[next.id] = next;
          return prev;
        }, {} as { [key: string]: Product });
    }
  );

  if (!loaded || !record) return null;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            {translate("resources.commands.fields.basket.ISBN")}
          </TableCell>
          <TableCell>
            {translate("resources.commands.fields.basket.name")}
          </TableCell>
          <TableCell>
            {translate("resources.commands.fields.basket.author")}
          </TableCell>
          <TableCell className={classes.rightAlignedCell}>
            {translate("resources.commands.fields.basket.quantity")}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {record.basket.map(
          (item: any) =>
            products[item.product_id] && (
              <TableRow key={item.product_id}>
                <TableCell>
                  {item.ISBN}
                </TableCell>
                <TableCell>
                  <Link to={`/products/${item.product_id}`}>
                    {products[item.product_id].name}
                  </Link>
                </TableCell>
                <TableCell>
                  {item.author}
                </TableCell>

                <TableCell className={classes.rightAlignedCell}>
                  {item.quantity}
                </TableCell>
              </TableRow>
            )
        )}
      </TableBody>
    </Table>
  );
};

export default Basket;
