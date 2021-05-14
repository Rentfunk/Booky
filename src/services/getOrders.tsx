import IOrder from "../models/IOrder";

export default async function getOrders() {
  let result: IOrder[] = [];

  await fetch("http://localhost:8000/api/v1/orders/", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
      .then(res => res.json())
      .then((orders: IOrder[]) => {
        result = orders;
      });

  return result;
}
