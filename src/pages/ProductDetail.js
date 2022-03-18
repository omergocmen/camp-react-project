import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "semantic-ui-react";
import ProductService from "../services/productService";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";
import {useDispatch} from 'react-redux'

export default function ProductDetail() {
  let { id } = useParams();
  const dispatch=useDispatch();

  const [product, setProduct] = useState({});
  useEffect(() => {
    let productService = new ProductService();
    productService
      .getByProductId(id)
      .then((result) => setProduct(result.data.data), []); // değişecek
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} Sepete Eklendi`);
  };

  return (
    <div className="mb">
      <Card fluid>
        <Card.Content>
          <Card.Header>{product.productName}</Card.Header>
          <img
            className="ui medium circular image imgs"
            src="https://picsum.photos/200/200?random=1"
          ></img>
          <Card.Meta>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
            numune kitabı oluşturmak üzere bir yazı galerisini alarak
            karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
            olarak kullanılmıştır
          </Card.Meta>
          <Card.Description>{product.quantityPerUnit}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>{product.unitPrice}</p>
          <a
            className="ui green  label"
            onClick={() => handleAddToCart(product)}
          >
            Sepete Ekle
          </a>
        </Card.Content>
      </Card>
    </div>
  );
}
