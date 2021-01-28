// @material-ui/icons
import GroupIcon from '@material-ui/icons/Group';
// core components/views for Admin layout
import Team from 'views/Team/Team.js';
// import Person from '@material-ui/icons/Person';
// import UserProfile from 'views/UserProfile/UserProfile.js';
// import Dashboard from '@material-ui/icons/Dashboard';
// import LibraryBooks from '@material-ui/icons/LibraryBooks';
// import TableList from 'views/TableList/TableList.js';
// import Sites from 'views/Sites/Sites.js';
// import DashboardPage from 'views/Dashboard/Dashboard.js';

const dashboardRoutes = [
  // {
  //   path: '/dashboard',
  //   name: 'Data',
  //   icon: Dashboard,
  //   component: DashboardPage,
  //   layout: '/admin',
  // },
  // {
  //   path: '/sites',
  //   name: 'Sites',
  //   icon: LibraryBooks,
  //   component: Sites,
  //   layout: '/admin',
  // },
  {
    path: '/team',
    name: 'Team',
    icon: GroupIcon,
    component: Team,
    layout: '/admin',
  },
  // {
  //   path: '/user',
  //   name: 'User Profile',
  //   icon: Person,
  //   component: UserProfile,
  //   layout: '/admin',
  // },
  // {
  //   path: '/table',
  //   name: 'Table List',
  //   icon: 'content_paste',
  //   component: TableList,
  //   layout: '/admin',
  // },
];

export default dashboardRoutes;
