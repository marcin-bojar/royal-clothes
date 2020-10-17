import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
      error: null,
      errorinfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorinfo) {
    this.setState({ errorinfo });
  }

  render() {
    const { hasError, errorinfo } = this.state;
    if (hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary__img-container">
            <img
              className="error-boundary__img"
              src="https://i.imgur.com/A040Lxr.png"
              alt="This page is lost in space"
            />
          </div>
          <h3 className="error-boundary__title">Ups, we've got problem...</h3>
          <p className="error-boundary__info">
            {/* info not in production! */}
            {/* {errorinfo && errorinfo.componentStack.toString()} */}
          </p>
          <button
            className="error-boundary__refresh-btn"
            onClick={() => window.location.reload()}
          >
            Refresh the page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
