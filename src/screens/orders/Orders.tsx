import React, { useEffect, useState } from "react";
import {Link, useHistory, useRouteMatch} from "react-router-dom";

import IOrder from "../../models/IOrder";
import getOrders from "../../services/getOrders";
import IGrade from "../../models/IGrade";
import IAuthor from "../../models/IAuthor";

function Orders() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const history = useHistory();

  let {url} = useRouteMatch();

  useEffect(() => {
    getOrders().then((orders: IOrder[]) => setOrders(orders));
  }, []);

  const handleOnClick = (event: any, order: IOrder) => {
    history.push({
        pathname: `${url}/${event.target.parentElement.firstChild.innerHTML}`,
        state: order,
    });
  };

  return (
    <div>
      <h2>Objednávky</h2>
      <Link to={`${url}/addOrder`}>Pridať objednávku</Link>
      <table>
        <thead>
          <tr>
            <th>Ročníky</th>
            <th>Názov knihy</th>
            <th>Autori</th>
            <th>Evidenčné číslo</th>
            <th>Počet kníh</th>
            <th>Cena za knihu</th>
            <th>Rok vydania</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr onClick={(event: any) => handleOnClick(event, order)} key={order.id}>
              <td style={{display: "none"}}>{order.id}</td>
              <td>{order.book.grades.map((grade:IGrade) => grade.name).join(", ")}</td>
              <td>{order.book.title}</td>
              <td>{order.book.authors.map((author:IAuthor) => author.name).join(", ")}</td>
              <td>{order.registry_number}</td>
              <td>{order.book_quantity}</td>
              <td>{order.price_per_book}</td>
              <td>{order.publication_year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
