import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/Navbar.scss";
import Logo from "../../image/Logo.svg";
import basketcart from "../../image/shopping-basket.svg";
import CartMenu from "../../component/cartMenu/CartMenu";

class Navbar extends Component {
  state = {
    basketOn: false,
  };

  handleBasket = () => {
    this.setState({ basketOn: !this.state.basketOn });
  };
  render() {
    return (
      <div className="">
        <nav className="navbar--wrapper">
          <div className="navbar--list_logo">
            <Link className="navbar--link" to="/">
              <img className="navbar--logo" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar--list_itemswrap">
            <div className="navbar--list_item">
              <Link className="navbar--link" to="/" to="/product">
                SHOP
              </Link>
            </div>
            <div className="navbar--list_item">
              <Link className="navbar--link" to="/" to="/wishlist">
                WISHLIST
              </Link>
            </div>
            <div className="navbar--list_item">
              <Link className="navbar--link" to="/" to="/cart">
                CART
              </Link>
              <div className="navbar--cart_icon">
                <img
                  onClick={this.handleBasket}
                  src={basketcart}
                  alt="basketcart"
                  id="basket"
                />
              </div>

              <CartMenu
                handleBasket={this.handleBasket}
                basketOn={this.state.basketOn}
              />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
