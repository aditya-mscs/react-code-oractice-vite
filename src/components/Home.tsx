import { Link } from "react-router";
import { routes } from "../utils/Utils";
import { API_URL } from "../config/config";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useEffect } from "react";

export default function Home() {
  const { user, setUser } = useGlobalContext();

  // Update user only once when the component mounts
  useEffect(() => {
    if (!user?.name) {  // Check if the user is already set
      setUser?.({ ...user, name: 'Addy' });
    }
  }, [user, setUser]);  // Depend on user to avoid redundant calls


  return (
    <div>
      <h1 className="text-3xl font-bold underline">React coding practice</h1>
      <h2>By {user?.name}</h2>
      <div>
        <ol role="list" className="divide-y divide-gray-100">
          {routes.map((route) => (
            !route.hideOnHome &&
            <li key={route.path} className="flex justify-between gap-x-6 py-2"><Link to={route.path}>{route.linkText}</Link></li>
          ))}
        </ol>
      </div>
      <p>API URL: {API_URL}</p>
    </div>
  )
}
