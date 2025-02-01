import { Topbar } from "../../components/topBar/Topbar";
import { useEffect, useState } from "react";
import { getAllProductsAsync } from "../../services/ProductService";
import { ProductDTO } from "../../interface/ProductDTO";
import { Outlet, useNavigate } from "react-router-dom";

export const ListProduct = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<ProductDTO[]>([]);
  useEffect(() => {
    const data = getAllProductsAsync().then((data: ProductDTO[]) => {
      setProducts(data);
    });
  }, []);

  const handleAddProduct = () => {
    console.log("clic");
    navigate("/GestionProductos/anadirProducto")
  };

  return (
    <>
      <Topbar />
      <button onClick={handleAddProduct}>Añadir producto.</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>descripcion</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <td>{item.idProduct}</td>
              <td>{item.productName}</td>
              <td>{item.productDescription}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </>
  );
};
