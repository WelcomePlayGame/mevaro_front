import { useEffect, useState } from "react";
import { getAllOrderByMebel, refreshToken } from "../../../../../api";

export const OrderMebel = () => {
  const [order_mebel, setOrder_Mebel] = useState([]);

  useEffect(() => {
    refreshToken()
      .then(() => getAllOrderByMebel(sessionStorage.getItem("authToken")))
      .then((data) => setOrder_Mebel(data))
      .catch((error) => {
        throw Error(error);
      });
  }, []);

  return (
    <section>
      <h1>Order</h1>
    </section>
  );
};
