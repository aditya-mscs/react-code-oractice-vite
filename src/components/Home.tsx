import { Link } from "react-router";
import { routes } from "../utils/Utils";

export default function Home() {
  return (
    <div>
      <h1>React coding practices</h1>
      {routes.map((route, index) => (
        !route.hideOnHome && <ol key={index}><Link to={route.path}>{route.linkText}</Link></ol>
      ))}
    </div>
  )
}
