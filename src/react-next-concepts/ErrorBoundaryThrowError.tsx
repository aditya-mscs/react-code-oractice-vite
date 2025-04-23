import React, { useEffect } from 'react';

const ErrorBoundaryThrowError: React.FC = () => {
  useEffect(() => {
    throw new Error('An error has been intentionally thrown!');
  }, []);

  return null;
};

export default ErrorBoundaryThrowError;
