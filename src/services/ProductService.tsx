import { ProductDTO } from "../interface/ProductDTO";

export const getAllProductsAsync = async () => {
  try {
    const result = await fetch(
      "http://localhost:5160/Product/obtenerProductos"
    );
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const registerProductAsync = async (product: ProductDTO) => {
  try {
    const request = await fetch(
      "http://localhost:5160/Product/registrarProducto",
      {
        method : "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
      }
    );
    return request
  } catch (error) {
    console.log(error);
  }
};
