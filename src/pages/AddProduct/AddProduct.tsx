import { useState, useRef } from "react";
import styles from "./AddProduct.module.css";
import { Topbar } from "../../components/topBar/Topbar";
import { ProductDTO } from "../../interface/ProductDTO";
import { registerProductAsync } from "../../services/ProductService";
//MAIN
export const AddProduct = () => {
  const [product, setProduct] = useState<ProductDTO>({
    idProduct: 0,
    price: 0,
    productDescription: "",
    productName: "",
    stock: 0,
  });

  const price = useRef<HTMLInputElement | null>(null);
  const productDescription = useRef<HTMLInputElement | null>(null);
  const productName = useRef<HTMLInputElement | null>(null);
  const stock = useRef<HTMLInputElement | null>(null);

  const handleform = (event: React.FormEvent) => {
    event.preventDefault();
    setProduct({
      idProduct: 0,
      price: parseFloat(price.current!!.value),
      productDescription: productDescription.current?.value
        ? productDescription.current.value
        : "",
      stock: parseFloat(stock.current!!.value),
      productName: productName.current!!.value,
    });

    saveProduct();
  };
  const saveProduct = () => {
    registerProductAsync(product).then((request) => {
      if (request?.ok) {
        alert("producto registrado con exito");
      } else {
        alert("ocurrio un errora");
      }
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleform}>
        <label htmlFor="nameProuct">Nombre de producto</label>
        <input id="nameProuct" type="text" ref={productName} />
        <label htmlFor="desciption">Descripcion(opcional)</label>
        <input id="desciption" type="text" ref={productDescription} />
        <label htmlFor="price">Precio</label>
        <input id="price" type="number" ref={price} defaultValue={0} />
        <label htmlFor="amount">cantidad</label>
        <input id="amount" type="number" ref={stock} defaultValue={0} />
        <button>Registrar producto</button>
      </form>
    </div>
  );
};
