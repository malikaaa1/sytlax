import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../context/ProductContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

//Создаем файл ADD PRODUCT
// мы создаем состаяние State. внутри  stata мы закидываем ключи и их изначальное состаяние будет пустая строка.

const AddProduct = () => {
  const [product, setProduct] = useState({
    type: "",
    title: "",
    description: "",
    image: "",
    details:""
  });


 //Потом принимаем функции getProducts, addProduct из productsContext через useContext ====> productContext

  const { getProducts, addProduct } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);


  //создаем функцию handleValues который в аргументы будет events, внутри этой функции создаем обьект newProduct. 
  //Который будет копировать полностью product. Product это наш State.
  //В место e.target.name ==> name ставятся наши ключи. e.target.value==> Значение наших импутов
  function handleValues(e) {
    let newProduct = {
      ...product,
      [e.target.name]: e.target.value,
      comments:[]
    };
  // вызываем функцию setProduct и закидываем newProduct наш обьект которую мы создали.
    setProduct(newProduct);
  }

//Потом создаем функцию handleAddProduct для нашей кнопки save, который будет отправлять запрос к серверу и сохранять там. 
// Сюда тоже вызываем функцию setProduct и передаем тоже самые ключи с пустой стракой.
//Потом там где наша кнопка add мы навешиваем слушатель события onClick и вызываем функцию handleAddProduct   
  function handleAddProduct() {
    addProduct(product);
    setProduct({
      type: "",
      title: "",
      description: "",
      image: "",
      details:""
    });
  }
  return (

  // В импутах. Создаем слушатель события onChange и вызываем handleValue
    <div className="addBlock">
      <p>Add Product</p>
      <span>Type</span>
      <input
        name="type"
        placeholder="Type"
        type="text"
        value={product.type}
        onChange={handleValues}
      />
      <span>Title</span>
      <input
        name="title"
        placeholder="Products Name"
        type="text"
        value={product.title}
        onChange={handleValues}
      />
      <span>Description</span>
      <input
        name="description"
        placeholder="Description..."
        type="text"
        value={product.description}
        onChange={handleValues}
      />
      <span>Image</span>
      <input
        name="image"
        placeholder="URL photo"
        type="text"
        value={product.price}
        onChange={handleValues}
      />
      <span>Details</span>
      <input
        name="detail"
        placeholder="URL"
        type="text"
        value={product.details}
        onChange={handleValues}
      />
      <Link to="/">
        <Button variant="contained" color="success" sx={{mt:2}} onClick={handleAddProduct}>
          Add Product +
        </Button>
      </Link>
    </div>
  );
};

export default AddProduct;
