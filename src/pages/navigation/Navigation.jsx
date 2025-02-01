import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../login/Login";
import { HistorySales } from "../historySales/HistorySales";
import { ListProduct } from "../ListProducts/ListProduct";
import { AddProduct } from "../AddProduct/AddProduct";
import {SaleProcess} from "../SaleProcess/SaleProcess"
import React from "react";

export function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/historial" Component={HistorySales} />
          <Route path="/GestionProductos" Component={ListProduct} />
          <Route
            path="/GestionProductos/anadirProducto"
            Component={AddProduct}
          />
          <Route path="/historial/procesoventa" Component={SaleProcess}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
