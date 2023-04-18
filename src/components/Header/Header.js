import React from "react";
import styles from "./Header.module.css";
import { GrMoney } from 'react-icons/gr';


function Header() {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}><GrMoney className={styles.icon} />Money Spending APP</h2>
            <p><span>The Rest of Money:</span> $1.000.000</p>
        </header>
    );
}

export default Header;