import { connect } from "react-redux";
import { data } from "../../../API/data";
import { addToCart } from "../../../reducers/action/cartActions";
import React, { Component } from "react";
import "../../../stylesheets/ProductDetail.scss";
import cartReducer from "../../../reducers/cartReducer";

import ControlledCarousel from "./ControlledCarousel";
import Popup from "./Popup";
import { Carousel } from "reactstrap";

class ProductDetail extends Component {
  state = {
    products: this.props.product,
    selectedData: "",

    name: this.props.name,
    total: 0,
  };

  /*add to cart when clicked*/

  handleAddToCart = (id) => {
    this.props.addToCart(id);
  };

  render() {
    console.log(this.state.products);
    return (
      <div className="product_main--wrapper">
        <div className="product_detail--wrapper">
          <div className="product--left_wrapper">
            <h2 className="product_detail--headline headline-2">
              Product Detail
            </h2>
            <div className="product_detail--product_wrap">
              {/* TESTING IMAGE */}

              {/*<img src={this.state.products.image} alt={this.state.products.id} /> */}

              <div className="product_detail--product_cols">
                <div className="product--detail--img"></div>
                <div className="product--popup--text">
                  <Popup />
                </div>
              </div>
            </div>
          </div>
          <div className="product-detail--right_wrapper">
            <div className="product_detail--product_cols">
              <div className="product--detail--text">
                <p>Category:{this.state.products.category}</p>
                <p>Name:{this.state.products.name}</p>
                <p>Size:{this.state.products.size}</p>
                <p>Price: {this.state.products.price}</p>
                <p>Color: {this.state.products.color}</p>
                <button
                  className="product_detail--button"
                  onClick={() => {
                    this.handleAddToCart(this.state.products.id);
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-carousel">
          <ControlledCarousel image={this.state.products.image} />
        </div>
      </div>
    );
  }
}

/*connecto to our reducer to change the state of our store  */

const mapStateToProps = (state) => {
  return {
    product: state.getProduct,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
