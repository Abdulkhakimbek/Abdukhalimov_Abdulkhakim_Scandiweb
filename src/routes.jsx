import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const CategoryPage = lazy(() => import("./pages/category"));
const ProductPage = lazy(() => import("./pages/product"));
const CheckoutPage = lazy(() => import("./pages/checkout"));
const ServerErrorPage = lazy(() =>
  import("./pages/serverError")
);
const NotFoundPage = lazy(() => import("./pages/notFound"));

class AppRoutes extends React.Component {
  render() {
    const { categoryNames } = this.props;

    return (
      <Routes>
        <Route
          path="/"
          element={<Navigate to={"/" + categoryNames[0].name} replace />}
        />
        {categoryNames.map(({ name }) => (
          <Route
            key={name}
            path={`/${name}`}
            element={<CategoryPage categoryName={name} />}
          />
        ))}
        <Route exact path="/product/:productId" element={<ProductPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/500" element={<ServerErrorPage />} />
        <Route exact path="/*" element={<NotFoundPage />} />
      </Routes>
    );
  }
}

export default AppRoutes;
