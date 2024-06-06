import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/recipe">Recipe</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
