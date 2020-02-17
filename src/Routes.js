import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Site from '@/pages/Site/site'
import SiteList from '@/pages/Site/siteList'
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';
import Server from '@/pages/Server/server'
import ServerList from '@/pages/Server/serverList'
import Company from '@/pages/Company/company'
import CompanyList from '@/pages/Company/companyList'
import  ServerOwnershipStatus  from "@/pages/Reports/ServerOwnershipStatus";
import  MostCalledUrls  from "@/pages/Reports/MostCalledUrls";
import  LongestResponseTime  from "@/pages/Reports/LongestResponseTime";
import OverallDiskStatus from "@/pages/Reports/OverallDiskStatus";
import ScheduledJobStatus from "@/pages/Reports/ScheduledJobs";

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
          path: 'site/:id',
          name: 'Site',
          component: Site,
        },
         {
          path: 'sitelist',
          name: 'SiteList',
          component: SiteList,
        },
        {
          path: 'server/:id',
          name: 'Server',
          component: Server,
        },
        {
          path: 'serverlist',
          name: 'ServerList',
          component: ServerList,
        },
        {
          path: 'company/:id',
          name: 'Company',
          component: Company,
        },
        {
          path: 'companylist',
          name: 'CompanyList',
          component: CompanyList,
        },
        {
          path: 'reports/server-ownership-status',
          name: 'ServerOwnershipStatus',
          component: ServerOwnershipStatus,
        },
        //MostCalledUrls
        {
          path: 'reports/most-called-urls',
          name: 'MostCalledUrls',
          component: MostCalledUrls,
        },
        {
          path: 'reports/longest-response-time',
          name: 'LongestResponseTime',
          component: LongestResponseTime,
        },
        {
          path: 'reports/overall-disk-status',
          name: 'OverallDiskStatus',
          component: OverallDiskStatus,
        },
        {
          path: 'reports/scheduled-job-status',
          name: 'ScheduledJobStatus',
          component: ScheduledJobStatus,
        }
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: ErrorPage,
    }
  ],
});
