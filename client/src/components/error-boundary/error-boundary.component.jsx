import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorinfo) {
    console.log(errorinfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Ups, we've got problem...</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
