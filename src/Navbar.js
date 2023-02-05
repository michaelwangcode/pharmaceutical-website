import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <div class="navbar">
      <Link to="/" className="site-title">
        💊 Pharmaceuticals Online
      </Link>
      <nav className="nav">
        <ul>
          <CustomLink to="/buy">View Inventory</CustomLink>
          <CustomLink to="/orders">Track Orders</CustomLink>
        </ul>
      </nav>
    </div>
  )
}

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}