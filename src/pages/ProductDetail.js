import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    let productService = new ProductService();
    productService
      .getByProductId(id)
      .then((result) => setProduct(result.data.data), []); // değişecek
  });

  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Card.Header>{product.productName}</Card.Header>
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
        </Card.Content>
      </Card>
    </div>
  );
}
