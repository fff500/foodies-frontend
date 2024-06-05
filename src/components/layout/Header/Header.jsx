import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import logoProps from '../../../utils/logoProps';

export const Header = () => {
  return (
    <header>
      <Link to="/">
        {' '}
        <Logo logoProps={logoProps} />
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
