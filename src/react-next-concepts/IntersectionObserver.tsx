

import { useEffect, useState, useRef } from 'react';
import FetchLazyLoadImages from './FetchApiImages';
import GoBackToHome from '../components/GoBacktoHome';


const IntersectionObserverComponent = () => {
  const [isBottom, setIsBottom] = useState(false);

  // 👇 Create a reference to the target element
  const targetRef = useRef<HTMLDivElement>(null);

  // 👇 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBottom(entry.isIntersecting);
        }
      }, {
      root: null, // Observing in the viewport
      threshold: 0.5 // ✅ Trigger when at least 50% of the element is visible
    });

    // 👇 Start observing the target element
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // 👇 Clean up
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <GoBackToHome />
      <h1>Intersection Observer</h1>
      <p>Intersection Observer is a browser API that allows you to observe when an element enters or exits the viewport. This can be useful for lazy loading images, infinite scrolling, and more.</p>
      <p>For this example, we'll use the Intersection Observer API to lazy load images. When an image is in the viewport, we'll load it. When it's not, we'll show a placeholder.</p>
      <p>Scroll down to see the images load as they enter the viewport.</p>

      <div style={{ minHeight: "200vh" }}>
        <FetchLazyLoadImages />
      </div>

      {/* 👇 Place targetRef BELOW all content for accurate detection */}
      <div ref={targetRef} style={{ background: "transparent" }}></div>

      {/* Message Box (Fixed, but does not act as observer target) */}
      <div
        style={{
          background: isBottom ? "green" : "red",
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
        }}>
        {isBottom ? "You've reached the bottom!" : "No bottom yet!"}
      </div>

    </div>
  );
}

export default IntersectionObserverComponent;
