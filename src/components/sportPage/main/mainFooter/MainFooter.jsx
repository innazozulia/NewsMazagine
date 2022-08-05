import React from "react";
import { sportFooter } from "../../../../assets/db";
import CartMainFooter from "./cartFooterMain/CartMainFooter";

import style from "./MainFooter.module.css";

const MainFooter = () => {
  const [items, setItems] = React.useState(sportFooter);
  console.log(setItems);
  return (
    <>
      <section className={style.main}>
        <div className={style.container}>
          {items.map((item) => {
            return <CartMainFooter key={item.id} item={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default MainFooter;
