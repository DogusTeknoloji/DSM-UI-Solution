import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Site from '@/pages/Site/site'
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';
import Server from '@/pages/Server/server'
import Company from '@/pages/Company/company'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: 'site',
          name: 'Site',
          component: Site,
        },
        {
          path: 'server',
          name: 'Server',
          component: Server,
        },
        {
          path: 'company',
          name: 'Company',
          component: Company,
        },
      

    
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: ErrorPage,
    }
  ],
});
