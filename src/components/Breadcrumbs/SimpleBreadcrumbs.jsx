import React from 'react';
import { Link as RouterLink, Route } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';

const SimpleBreadcrumbs = () => {
  return (
    <Route>
      {({ location }) => {
        const pathNames = location.pathname.split('/').filter((x) => x);
        return (
          <Breadcrumbs aria-label='Breadcrumb'>
            {pathNames.map((value, index) => {
              const last = index === pathNames.length - 1;
              const to = `/${pathNames.slice(0, index + 1).join('/')}`;
              return last ? (
                <Typography color='textSecondary' key={to}>
                  {value}
                </Typography>
              ) : (
                <RouterLink color='inherit' to={to} key={to}>
                  {value}
                </RouterLink>
              );
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
};

export default SimpleBreadcrumbs;
