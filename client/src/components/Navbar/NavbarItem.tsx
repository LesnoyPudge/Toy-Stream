import { FC } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


interface INavbarItemProps {
    label: string;
    to: string;
    handleClose?: () => void;
}

export const NavbarItem: FC<INavbarItemProps> = ({ label, to, handleClose }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <li 
            className={
                'navbar__nav-item nav-item' +
                (match ? ' nav-item--active' : '')
            }

            onClick={handleClose}
        >
            <Link
                to={to}
                >
                {label}
            </Link>
        </li>
    );
  }