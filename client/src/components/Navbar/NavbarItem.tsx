import { FC } from "react";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";


export const NavbarItem: FC<LinkProps> = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <li 
            className={
                'navbar__nav-item nav-item' +
                (match ? ' nav-item--active' : '')
            }
        >
            <Link
                to={to}
                {...props}
                >
                {children}
            </Link>
        </li>
    );
  }