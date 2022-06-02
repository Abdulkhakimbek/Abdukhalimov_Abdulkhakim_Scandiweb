import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategoryNames } from "../../redux/shopReducer";

import "./NavMenu.scss";

import CustomLink from "../../utils/customLink/CustomLink.comp";

class NavMenu extends React.Component {
  render() {
    const { routes } = this.props;
    return (
      <nav className="nav-menu">
        {routes
          ? routes.map(({ name }) => (
            <CustomLink to={name} key={name}>
              {name}
            </CustomLink>
          ))
          : null}
      </nav>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  routes: selectCategoryNames,
});

export default connect(mapStateToProps)(NavMenu);
