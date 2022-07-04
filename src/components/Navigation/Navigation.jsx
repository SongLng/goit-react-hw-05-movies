import { Container } from 'CommonStyled/Common.styled';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { Nav, MenuItem } from './Navigation.styled';

const Navigation = () => {
  return (
    <Container>
      <nav>
        <Nav>
          <MenuItem>
            <NavLink
              to="/"
              className={({ isActive }) =>
                !isActive ? `${css.link}` : `${css.activeLink}`
              }
            >
              Home
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                !isActive ? `${css.link}` : `${css.activeLink}`
              }
            >
              Movies
            </NavLink>
          </MenuItem>
        </Nav>
      </nav>
    </Container>
  );
};

export { Navigation };
