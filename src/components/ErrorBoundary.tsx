import React from "react";
import GoBackToHome from "./GoBacktoHome";

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ error }); //IMP: to save error and show
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Error Bondary page</h1>
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.toString()}</p>
          <GoBackToHome />
        </>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;