import React from 'react';
import styles from "./Main.module.css";
import data from "../../data.json";
import ShowCart from "../ShowCart/ShowCart";

function Main({ cart, setCart, totalPrice }) {

  const addToCart = (obj) => {
    const findItem = cart.find(item => item.id === obj.id);

    if (findItem) {
      setCart(oldState => oldState.map(book => book.id === findItem.id ? { ...book, amount: book.amount + 1 } : book));
      return;
    }
    setCart(prevState => ([...prevState, obj]));
  }

  const dataMap = data.shoppingList.map(item => (
    <section key={item.id} className={styles.itemCard}>
      <img className={styles.image} src={item.url} alt="shopping_photo" />
      <h4 className={styles.title}>{item.name}</h4>
      <p className={styles.price}>{item.price} $</p>
      <button className={styles.btn} onClick={() => addToCart(item)}>Add to cart</button>
    </section>
  ));

  return (
    <main>
      <section className={styles.container}>
        {dataMap}
      </section>
      <ShowCart cart={cart} setCart={setCart} totalPrice={totalPrice} />
    </main>
  )
}

export default Main;