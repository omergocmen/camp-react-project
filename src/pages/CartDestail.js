import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";
import { addToCart } from "../store/actions/cartActions";

export default function CartDestail() {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteItem = (cartItem) => {
    dispatch(removeFromCart(cartItem.product));
    toast.info(cartItem.product.productName + " başarıyla silindi");
  };
  const currencyFormat = (num) => {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} Sepete Eklendi`);
  };

  return (
    <div>
      <table class="ui definition table">
        <thead>
          <tr>
            <th></th>
            <th>Ürün</th>
            <th>Ürün Sayısı</th>
            <th>Birim Fiyatı</th>
            <th>Toplam Fiyat</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {cartState.cartItems.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.product.productName}</td>
              <td>{item.quantity}</td>
              <td>{currencyFormat(item.product.unitPrice)}</td>
              <td>{currencyFormat(item.product.unitPrice * item.quantity)} </td>
              <td>
                {" "}
                <a
                  className="ui red circular label"
                  onClick={() => deleteItem(item)}>X</a>
                <a
                  className="ui green circular label"
                  onClick={() => handleAddToCart(item.product)}>+</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
