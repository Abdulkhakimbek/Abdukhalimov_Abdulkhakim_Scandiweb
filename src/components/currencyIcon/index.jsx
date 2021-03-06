import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentCurrencySymbol } from "../../redux/currencyReducer";
import {
  selectIsCurrencyMenuOpen,
  toggleCurrencyMenu,
} from "../../redux/uiReducer";

import { ReactComponent as ArrowSVG } from "../../assets/images/down-arrow.svg";

import "./CurrencyIcon.scss";

import CurrencyMenu from "../currencyMenu";

class CurrencyIcon extends React.Component {
  render() {
    const { isMenuOpen, toggleMenu, currencySymbol } = this.props;

    const handleOnClick = (e) => {
      e.stopPropagation();
      toggleMenu();
    };

    return (
      <>
        <div
          className={`currency-icon ${isMenuOpen ? "currency-icon__active" : ""}`}
          onClick={handleOnClick}
        >
          <span>{currencySymbol}</span>
          <ArrowSVG />
        </div>
        {isMenuOpen ? <CurrencyMenu /> : null}
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currencySymbol: selectCurrentCurrencySymbol,
  isMenuOpen: selectIsCurrencyMenuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleCurrencyMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyIcon);
