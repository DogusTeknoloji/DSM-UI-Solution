import Vue from "vue";
import Router from "vue-router";

import Layout from "@/components/Layout/Layout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import DashboardServerStats from "@/pages/Dashboard/ServerStatistics";
import AppManagementInfo from "@/pages/Dashboard/AppManagementInfo";
import ElasticSearchInventory from "@/pages/Dashboard/ElasticSearchInventory";
import AzureDevOpsDeploymentAgents from "@/pages/AzureDevOps/deployment-agents";
import AzureDevOpsDeploymentGroups from "@/pages/AzureDevOps/deployment-groups";
import AzureDevOpsProjects from "@/pages/AzureDevOps/projects";
import Site from "@/pages/Site/site";
import SiteList from "@/pages/Site/siteList";
import Login from "@/pages/Login/Login";
import ComingSoonPage from "@/pages/ComingSoon/ComingSoon";
import ErrorPage from "@/pages/Error/Error";
import Server from "@/pages/Server/server";
import ServerList from "@/pages/Server/serverList";
import ServerListODM from "@/pages/Reports/serverListODM";
import KpiStatus from "@/pages/Reports/KpiStatus";
import Company from "@/pages/Company/company";
import CompanyList from "@/pages/Company/companyList";
import ServerOwnershipStatus from "@/pages/Reports/ServerOwnershipStatus";
import MostCalledUrls from "@/pages/Reports/MostCalledUrls";
import LongestResponseTime from "@/pages/Reports/LongestResponseTime";
import OverallDiskStatus from "@/pages/Reports/OverallDiskStatus";
import ScheduledJobStatus from "@/pages/Reports/ScheduledJobs";
import DatabasePortal from "@/pages/DBPortal/DatabasePortal";
import DatabasePortalDetails from "@/pages/DBPortal/DatabasePortalDetails";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/error",
      name: "Error",
      component: ErrorPage,
    },
    {
      path: "/comingsoon",
      name: "ComingSoon",
      component: ComingSoonPage,
    },
    {
      path: "/app",
      name: "Layout",
      component: Layout,

      children: [
        {
          path: "dashboard",
          name: "Dashboard - Overview",
          component: Dashboard,
        },
        {
          path: "dashboard/srvstatistics",
          name: "Dashboard - Server Statistics",
          component: DashboardServerStats,
        },
        {
          path: "dashboard/appmanagement",
          name: "Applicaton Management - Links",
          component: AppManagementInfo,
        },
        {
          path: "dashboard/elastic-search-inventory",
          name: "Elastic Search Inventory",
          component: ElasticSearchInventory
        },
        {
          path: "AzureDevOps/Projects",
          name: "Azure DevOps Projects",
          component: AzureDevOpsProjects,
        },
        {
          path: "AzureDevOps/DeploymentGroups",
          name: "Azure DevOps Deployment Groups",
          component: AzureDevOpsDeploymentGroups,
        },
        {
          path: "AzureDevOps/DeploymentAgents",
          name: "Azure DevOps Deployment Agents",
          component: AzureDevOpsDeploymentAgents,
        },
        {
          path: "site/:id",
          name: "Site",
          component: Site,
        },
        {
          path: "sitelist",
          name: "SiteList",
          component: SiteList,
        },
        {
          path: "server/:id",
          name: "Server",
          component: Server,
        },
        {
          path: "serverlist",
          name: "ServerList",
          component: ServerList,
        },
        {
          path: "company/:id",
          name: "Company",
          component: Company,
        },
        {
          path: "companylist",
          name: "CompanyList",
          component: CompanyList,
        },
        {
          path: "databasePortal",
          name: "Database Portal",
          component: DatabasePortal,
        },
        {
          path: "databasePortalDetails/:id",
          name: "Database Portal Details",
          component: DatabasePortalDetails,
        },
        {
          path: "reports/server-ownership-status",
          name: "ServerOwnershipStatus",
          component: ServerOwnershipStatus,
        },
        //MostCalledUrls
        {
          path: "reports/most-called-urls",
          name: "MostCalledUrls",
          component: MostCalledUrls,
        },
        {
          path: "reports/longest-response-time",
          name: "LongestResponseTime",
          component: LongestResponseTime,
        },
        {
          path: "reports/overall-disk-status",
          name: "OverallDiskStatus",
          component: OverallDiskStatus,
        },
        {
          path: "reports/scheduled-job-status",
          name: "ScheduledJobStatus",
          component: ScheduledJobStatus,
        },
        {
          path: "reports/serverlistodm",
          name: "ServerListODM",
          component: ServerListODM,
          },
        {
           path: "reports/kpi-status",
           name: "KpiStatus",
           component: KpiStatus,
        },
      ],
    },
    {
      path: "*",
      name: "xPage",
      component: ErrorPage,
    },
  ],
});
