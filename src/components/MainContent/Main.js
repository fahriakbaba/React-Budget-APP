import React from 'react';
import styles from "./Main.module.css";
import data from "../../data.json";

function Main() {
  const [cart, setCart] = React.useState([]);
  console.log("cart: ", cart);

  const addToCart = (obj) => {
    setCart(prevState => ([...prevState, obj]));
  }

  const dataMap = data.shoppingList.map(item => (
    <section key={item.id} className={styles.itemCard}>
      <img className={styles.image} src={item.url} alt="shopping_photo" />
      <h4 className={styles.title}>{item.name}</h4>
      <p className={styles.price}>{item.price} $</p>
      <button className={styles.btn} onClick={() =>addToCart(item)}>Add to cart</button>
    </section>
  ));

  return (
    <main className={styles.container}>
      {dataMap}
    </main>
  )
}

export default Main;