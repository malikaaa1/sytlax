import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../context/ProductContext";
import Button from "@mui/material/Button";

const EditProducts = ({ id }) => {
  // С продукт контекст мы принимаем 3 функции 
  const { editProductDetails, getProducts, productDetails } =
    useContext(productsContext);
  // Мы создали здесь  state и в аргументы мы закидываем ProductsDetails.
  const [editProduct, setEditProduct] = useState(productDetails);


  //первая функция у нас здесь ClickEdit  в аргументы мы указываем id.
  //потом мы вызываем функцию editProductDetails и в аргументы вызываем id и editProduct 
  function clickEdit(id) {
    editProductDetails(id, editProduct);
    getProducts();
  }

  return (
    <div className="editBlock">
      <span>Категория</span>
      <input
        name="type"
        placeholder="Котегории фильтрации"
        type="text"
        value={editProduct.type}
        onChange={(e) =>
          setEditProduct({ ...editProduct, type: e.target.value })
        }
      />
      <span>Название</span>
      <input
        name="title"
        placeholder="Название"
        type="text"
        value={editProduct.title}
        onChange={(e) =>
          setEditProduct({ ...editProduct, title: e.target.value })
        }
      />
      <span>Описание</span>
      <input
        name="description"
        placeholder="напишити новость"
        type="text"
        value={editProduct.description}
        onChange={(e) =>
          setEditProduct({ ...editProduct, description: e.target.value })
        }
      />
      <span>Изображение</span>
      <input
        name="image"
        placeholder="URL Image"
        type="text"
        value={editProduct.image}
        onChange={(e) =>
          setEditProduct({ ...editProduct, image: e.target.value })
        }
      />
      <span>Details</span>
      <input
        name="image"
        placeholder="more URL image"
        type="text"
        value={editProduct.details}
        onChange={(e) =>
          setEditProduct({ ...editProduct, details: e.target.value })
        }
      />
      <Link to="/">
        <Button
          variant="contained"
          color="success"
          onClick={() => clickEdit(id)}
        >
          Сохранить
        </Button>
      </Link>
    </div>
  );
};

export default EditProducts;
