import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentCurrency } from "../../redux/currencyReducer";
import {
  selectCartItems,
  selectCartItemsTotalCount,
  selectCartItemsTotalPrice,
} from "../../redux/cartReducer";

import CartItem from ".";

class CartItemsContainer extends React.Component {
  render() {
    const {
      cartItems,
      cartItemsTotalCount,
      cartItemsTotalPrice,
      currentCurrency,
      children,
      className,
      displayThumbnailArrows,
    } = this.props;

    const totalPrice = cartItemsTotalPrice(currentCurrency);
    let tax = (parseInt(totalPrice.substring(1))) * 21 / 100

    return (
      <div className={className}>
        {cartItemsTotalCount ? (
          <div className="cart-items-container__items">
            {cartItems.map((item, idx) => (
              <CartItem
                item={item}
                key={idx}
                id={idx}
                currentCurrency={currentCurrency}
                displayThumbnailArrows={displayThumbnailArrows}
              />
            ))}
          </div>
        ) : (
          { ...children }
        )}

        {!cartItemsTotalCount && displayThumbnailArrows ? null : (
          <div className="cart-items-summary">
            <div className="cart-items-summary__tax">
              <span>Tax 21%:</span>
              <span>{` $ ${tax}`}</span>
            </div>
            <div className="cart-items-summary__quantity">
              <span>Quantity:</span>
              <span>{cartItemsTotalCount}</span>
            </div>
            <div className="cart-items-summary__total">
              <span>Total:</span>
              <span>{totalPrice}</span>
            </div>
            <button className="cart-items-summary__order">
              Order
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentCurrency: selectCurrentCurrency,
  cartItems: selectCartItems,
  cartItemsTotalCount: selectCartItemsTotalCount,
  cartItemsTotalPrice: (currency) => selectCartItemsTotalPrice(currency),
});

export default connect(mapStateToProps)(CartItemsContainer);
