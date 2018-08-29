import Home from './Home';
import List from './List';
import App from './App';


const routes = [

  {
    path: '/home',
    component: Home,
  },
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/list',
    component: List,
  }
];

export default routes;