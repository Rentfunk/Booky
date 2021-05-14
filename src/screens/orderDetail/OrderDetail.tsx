import React from "react";
import {Link, useLocation} from "react-router-dom"

import IOrder from "../../models/IOrder";
import IGrade from "../../models/IGrade";
import IAuthor from "../../models/IAuthor";

function OrderDetail() {
    const location = useLocation<any>();
    const order: IOrder = location.state;

    return (
      <div>
          <h2>{order.book.title}</h2>
          <Link to="/orders">Späť</Link>
          <table>
              <tbody>
                <tr>
                    <td>Ročníky</td>
                    <td>{order.book.grades.map((grade: IGrade) => grade.name).join(", ")}</td>
                </tr>
                <tr>
                    <td>Názov učebnice</td>
                    <td>{order.book.title}</td>
                </tr>
                <tr>
                    <td>Autori</td>
                    <td>{order.book.authors.map((author: IAuthor) => author.name).join(", ")}</td>
                </tr>
                <tr>
                    <td>Kód</td>
                    <td>{order.code}</td>
                </tr>
                <tr>
                    <td>ISBN</td>
                    <td>{order.isbn}</td>
                </tr>
                <tr>
                    <td>Evidenčné číslo</td>
                    <td>{order.registry_number}</td>
                </tr>
                <tr>
                    <td>Fakturačné číslo</td>
                    <td>{order.billing_number}</td>
                </tr>
                <tr>
                    <td>Počet kníh</td>
                    <td>{order.book_quantity}</td>
                </tr>
                <tr>
                    <td>Cena za knihu</td>
                    <td>{order.price_per_book}</td>
                </tr>
                <tr>
                    <td>Rok vydania</td>
                    <td>{order.publication_year}</td>
                </tr>
                <tr>
                    <td>Dátum objednávky</td>
                    <td>{order.ordered_at}</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
}

export default OrderDetail;