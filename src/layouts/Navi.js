import React from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


//useHistory araştır
export default function Navi() {

  const {cartItems} = useSelector(state=>state.cart);
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate=useNavigate();
  function handleSignOut(params) {
    setIsAuthenticated(false);
    navigate("/");
  }
  function handleSignIn(params) {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" as={NavLink} to="/" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
           {cartItems.length>0&&<CartSummary/>}
            {isAuthenticated?<SignedIn signOut={handleSignOut} />
            :<SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
