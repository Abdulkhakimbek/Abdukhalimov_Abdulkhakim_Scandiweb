import React, { Suspense } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SpinnerComp from "./utils/spinner/Spinner.comp";
import {
  fetchInitialDataAsync,
  selectCategoryNames,
  selectHasNetworkError,
  selectIsLoading,
} from "./redux/shopReducer";

import HeaderComp from "./components/header";
import AppRoutes from "./routes";
import ServerErrorPage from "./pages/server-error";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    const { categoryNames, isLoading, hasNetworkError } = this.props;

    if (isLoading) return <SpinnerComp />;
    else if (hasNetworkError) return <ServerErrorPage />;
    else
      return (
        <>
          <HeaderComp />
          <main id="page-container">
            <Suspense fallback={<SpinnerComp />}>
              <AppRoutes categoryNames={categoryNames} />
            </Suspense>
          </main>
        </>
      );
  }
}

const mapStateToProps = createStructuredSelector({
  categoryNames: selectCategoryNames,
  isLoading: selectIsLoading,
  hasNetworkError: selectHasNetworkError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInitialData: () => dispatch(fetchInitialDataAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
