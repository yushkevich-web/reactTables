import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { BreadcrumbsContext } from "../App";

export function BreadcrumbsTemplate() {

  const {breadcrumbs, setBreadcrumbs} = useContext(BreadcrumbsContext);

  const handleRemove = (index) => {
    setBreadcrumbs(breadcrumbs.slice(0, index + 1))
  }

  return (
    <nav id='crumbs'>
      <ul>
        {breadcrumbs.map((el, index) => (
          <li key={el.url}>
            <NavLink 
              to={`${el.url}`}
              className={({isActive}) => isActive ? 'breadcrumb-active' : 'breadcrumb'}
              onClick={() => handleRemove(index)}
            >
              {el.title}
            </NavLink>
          </li>
          )
        )}
      </ul>

    </nav>
  );
}
