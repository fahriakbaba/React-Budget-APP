import React from "react";
import styles from "./ShowCart.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";

function ShowCart(props) {
  const { cart, setCart, totalPrice } = props;

  return (
    <section className={styles.container}>
      {cart.length > 0 ? (
        cart.map((item) => (
          <article key={item.id}>
            <div>
              <img src={item.url} alt="little_photo" />
              <h5>
                {item.name}<span className={styles.cartAmount}> x {item.amount}</span>
              </h5>
            </div>
            <div>${item.price * item.amount}</div>
          </article>
        ))
      ) : (
        <p className={styles.emptyCartInfo}>No cart item to show!</p>
      )}
      {cart.length > 0 && (
        <div className={styles.cartPrice}>
          <div>
            <h5>Total:</h5>
            <p>${totalPrice}</p>
          </div>
          <div>
            <button className={styles.btn} onClick={() => setCart([])}>
              <RiDeleteBin5Line /> Clear All
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ShowCart;
