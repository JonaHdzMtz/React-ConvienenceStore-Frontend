import React, { useState } from "react";
import { getAllProductsAsync } from "../../services/ProductService";
import { useEffect } from "react";
export const SaleProcess = () => {
const [productStock,setProductStock] = useState()
useEffect(()=>{
    getAllProductsAsync().then((data) =>{
        console.log(`tamaño: ${data.length}`)
    });
},[])

  return (
    <>
      <div>
        <div>
          <h3>stock</h3>
          <input type="text" placeholder="Nombre/id" />
          <table></table>
        </div>
        <div>
          <h3>carrito</h3>
          <table></table>
        </div>
        <div>
          <button>cancelar venta</button>
          <button>finalizar venta</button>
        </div>
      </div>
    </>
  );
};
