/* eslint-disable react-dom/no-missing-button-type */
import { lazy, Suspense, useState } from "react";

const GoBackToHome = lazy(() => import("../components/GoBacktoHome"))

const LazyLoadSuspense = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div>
      <h1>Lazy Load Suspense</h1>
      <p>Lazy load is a technique to load components only when they are needed.</p>
      <p>React.lazy lets you render a dynamic import as a regular component.</p>
      <p>"Suspense fallback" is a component that lets you "wait" for some code to load and specify some fallback content to show while waiting.</p>
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