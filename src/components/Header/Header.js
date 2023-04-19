import React from "react";
import styles from "./Header.module.css";
import { GrMoney } from 'react-icons/gr';


function Header({totalPrice}) {

    return (
        <header className={styles.header}>
            <h2 className={styles.title}><GrMoney className={styles.icon} />Money Spending APP</h2>
            <p><span>The Rest of Money:</span> ${1000000 - totalPrice}</p>
        </header>
    );
}

export default Header;