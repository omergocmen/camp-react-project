import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Dropdown, Label } from "semantic-ui-react";
import { removeFromCart } from "../store/actions/cartActions";




export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch=useDispatch();
  const deleteItem=(cartItem)=>{
    dispatch(removeFromCart(cartItem.product));
    toast.info(cartItem.product.productName + " başarıyla silindi");
  }
  
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {cartItems.map((cartItem,index) => (
            <Dropdown.Item key={index}>
              <a className="ui red circular label" onClick={()=>deleteItem(cartItem)}>X</a>
              {cartItem.product.productName}
              <Label>{cartItem.quantity}</Label>
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            Sepete Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
