import React from "react";
import styles from "./Header.module.css";


function Header() {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>Money Spending APP</h2>
        </header>
    );
}

export default Header;