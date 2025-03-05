import { useState } from "react";
import GoBackToHome from "./GoBacktoHome";

const ShowHideDiv = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <GoBackToHome />
      <h1>Show Hide Div</h1>
      <button onClick={() => setShow(!show)}>Toggle show</button>
      { show &&
        <div>
          <h5>Content</h5>
        </div>
      }
    </div>
  ) 
}

export default ShowHideDiv