/* eslint-disable react-dom/no-missing-button-type */
import { lazy, Suspense, useState } from "react";

const GoBackToHome = lazy(() => import("./GoBacktoHome"))

const LazyLoadSuspense = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div>
      <h1>Lazy Load Suspense</h1>
      <button onClick={handleClick}>Toggle Suspense</button>
      {
        show ? 
          <Suspense fallback={<div>Loading...</div>}>
            <GoBackToHome />
          </Suspense> 
        : null
      }
    </div>
  )
}

export default LazyLoadSuspense;