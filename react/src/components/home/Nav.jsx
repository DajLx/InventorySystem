import { NavLink } from "react-router";

function Nav() {
  return (
    <nav id="main-nav">
      <i>this is the nav</i>
      <ul>
        <li>
          <NavLink to="/productos">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/categorias">Categorías</NavLink>
        </li>
        <li>
          <NavLink to="/proveedores">Proveedores</NavLink>
        </li>
        <li>
          <NavLink to="/pedidos-web">Pedidos web</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
