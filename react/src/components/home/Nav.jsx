import { NavLink } from "react-router";

function Nav() {
  return (
    <nav id="main-nav">
      <ul id="main-nav-ul">
        <li>
          <button className="nav-bttn" type="button">
            <NavLink to={"/"}>Products</NavLink>
          </button>
        </li>
        <li>
          <button className="nav-bttn" type="button">
            <NavLink to={"/categories"}>Categories</NavLink>
          </button>
        </li>
        <li>
          <button className="nav-bttn" type="button">
            <NavLink to={"/suppliers"}>Suppliers</NavLink>
          </button>
        </li>
        <li>
          <button className="nav-bttn" type="button">
            <NavLink to={"/web-orders"}>Web orders</NavLink>
          </button>
        </li>
        <li>
          <button className="nav-bttn" type="button">
            <NavLink to={"/create-invoice"}>Create invoice</NavLink>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
