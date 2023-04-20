import React from "react";
import AppCrash from "./AppCrash";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({ error, errorInfo });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, t } = this.props;

    if (hasError) {
      return (
        <AppCrash
          t={t}
          error={error && error.message}
          errorInfo={errorInfo && errorInfo.componentStack}
        />
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  error: PropTypes.string,
  t: PropTypes.func,
  children: PropTypes.object,
};

export default ErrorBoundary;
