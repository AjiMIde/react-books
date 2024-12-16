/* eslint-disable */
/* @ts-ignore */
/*失败中勿用*/
import React, { useState } from 'react';
import { useRouteError } from 'react-router-dom'

function ErrorBoundary() {
  const [hasError, setHasError] = useState(false);

  const resetError = () => setHasError(false);

  const ErrorBoundary = ({ children }: any) => {
    if (hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={resetError}>Try again</button>
        </div>
      );
    }

    return (
      <React.Fragment>
        {React.Children.map(children, child => {
          return React.cloneElement(child, { setHasError });
        })}
      </React.Fragment>
    );
  };

  return [ErrorBoundary, setHasError];
}

function ErrorBoundary2 () {
  let error = useRouteError();
  console.error(error, '???');
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

export default ErrorBoundary2;

console.log(ErrorBoundary);
