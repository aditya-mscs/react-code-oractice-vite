import { Link } from "react-router";
import { routes } from "../utils/Utils";
import { API_URL } from "../config/config";

export default function Home() {
  return (
    <div>
      <h1>React coding practices</h1>
      {routes.map((route) => (
        !route.hideOnHome && <ol key={route.path}><Link to={route.path}>{route.linkText}</Link></ol>
      ))}
      <p>API URL: {API_URL}</p>
    </div>
  )
}
