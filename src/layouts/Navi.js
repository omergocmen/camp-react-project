import React from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


//useHistory araştır=> useNavigate olmuş 
export default function Navi() {

  const {cartItems} = useSelector(state=>state.cart);
  const auth=useSelector(state=>state.auth.auth);

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Ana Sayfa" as={NavLink} to="/" />
          <Menu.Item as={NavLink} to="/product/add" name="Ürün Ekle" />
          <Menu.Menu position="right">
           {cartItems.length>0&&<CartSummary/>}
            {auth?<SignedIn />
            :<SignedOut />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
