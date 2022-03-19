import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button,  Table } from "semantic-ui-react";
import ProductService from "../services/productService";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";
import Pagination from "../layouts/Pagination";
import {
  changePage,
  changeTotelPage,
} from "../store/actions/paginationActions";

export default function ProductList() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  const paginationState = useSelector((state) => state.pagination);

  const begin=(paginationState.selectedPage-1)*(paginationState.range);
  const last=begin+paginationState.range;

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data), []);
  });

  const result = products.filter(
    (p) =>
      p.category.categoryName === selectedCategory || selectedCategory === ""
  );
  dispatch(
    changeTotelPage(parseInt(result.length / paginationState.range, 10) + 1)
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} Sepete Eklendi`);
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell>#</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {result.map((product, index) =>
            (product.category.categoryName === selectedCategory ||
              selectedCategory === "") && (index<last && index>begin-1)  ? (
              <Table.Row key={product.id}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>
                  <Link to={`/products/${product.id}`}>
                    {product.productName}
                  </Link>
                </Table.Cell>
                <Table.Cell>{product.unitPrice}</Table.Cell>
                <Table.Cell>{product.unitsInStock}</Table.Cell>
                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                <Table.Cell>{product.category.categoryName}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleAddToCart(product)}>
                    Sepete Ekle
                  </Button>
                </Table.Cell>
              </Table.Row>
            ) : null
          )}
        </Table.Body>
      </Table>
      <Pagination />
    </div>
  );
}
