import React from "react";
import styles from "./Topbar.module.css";
import { list } from "postcss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const Topbar = () => {

    const navigate = useNavigate()
    const handleListProduct=()=>navigate("/GestionProductos")
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="menu-toggle"
        style={{}}
      />
      <div className={styles.row}>
        <ul className={styles.list}>
          <li className={styles.listItem} >
            <a className={styles.anchor} href="" onClick={()=>navigate("/historial")}>
              Historial de ventas|
            </a>
          </li>
          <li className={styles.listItem} onClick={handleListProduct}>
            <a className={styles.anchor} href="">
              Stock productos|
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.anchor} href="">
              categorias
            </a>
          </li>
        </ul>
        <button className={styles.buttonSession}>Cerrar sesion</button>
      </div>

      <label htmlFor="menu-toggle" className={styles.buttonDisplayMenu}>
        Menu
      </label>
    </div>
  );
};
