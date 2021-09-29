<template>
<div>
  <b-collapse class="sidebar-collapse" id="sidebar-collapse" :visible="sidebarOpened">
    <nav :class="{sidebar: true}">
      <header class="logo">
        <router-link to="/app/dashboard">
          <span class="fw-semi-bold">D</span>SM
        </router-link>
      </header>
      <ul class="nav">
          <NavLink :activeItem="activeItem"
                   header="Dashboard"
                   link="/app/dashboard"
                   iconName="fi flaticon-home"
                   index="dashboard"
                   isHeader
                   :childrenLinks="[
          { header: 'Overview', link: '/app/dashboard' },
          { header: 'Server Statistics', link: '/app/dashboard/srvstatistics' , betaFeature:'betaFeature' },
          { header: 'App. Management', link: '/app/dashboard/appmanagement' , betaFeature:'betaFeature' },
          { header: 'ElasticSearch Inventory', link: '/app/dashboard/elastic-search-inventory', betaFeature: 'betaFeature'}
        ]" />
          <NavLink :activeItem="activeItem"
                   header="Azure DevOps"
                   link="/app/azuredevops"
                   iconName="fa fa-code"
                   index="azuredevops"
                   isHeader
                   :childrenLinks="[
          { header: 'Projects', link: '/app/azuredevops/projects' },
          { header: 'Deployment Groups', link: '/app/azuredevops/deploymentgroups' , betaFeature:'betaFeature' },
          { header: 'Deployment Agents', link: '/app/azuredevops/deploymentagents' , betaFeature:'betaFeature' }
        ]" />

          <NavLink header="Sites"
                   link="/app/sitelist"
                   iconName="glyphicon glyphicon-globe"
                   index="siteList"
                   isHeader />
          <NavLink header="Servers"
                   link="/app/serverlist"
                   iconName="glyphicon glyphicon-tasks"
                   index="server"
                   isHeader />
          <NavLink header="Companies"
                   link="/app/companylist"
                   iconName="fa fa-sitemap"
                   index="company"
                   isHeader />

          <NavLink header="Database Portal"
                   link="/app/databasePortal"
                   iconName="fa fa-cubes"
                   index="dbportal"
                   isHeader />

          <NavLink :activeItem="activeItem"
                   header="Reports"
                   link="/app/reports"
                   iconName="glyphicon glyphicon-file"
                   index="reports"
                   :childrenLinks="[
          { header: 'Overall Disk Status', link: '/app/reports/overall-disk-status' },
          { header: 'Scheduled Jobs', link: '/app/reports/scheduled-job-status' },
          { header: 'ODM Server List', link: '/app/reports/serverlistodm' },
          { header: 'Monthly KPI Status', link: '/app/reports/kpi-status' }
        ]" />

          <NavLink :activeItem="activeItem"
                   header="Monitoring"
                   link="/app/monitoring"
                   iconName="glyphicon glyphicon-dashboard"
                   index="monitoring"
                   :childrenLinks="[
          { header: 'Alerts', link: '/app/monitoring/alerts' }
        ]" />
      </ul>
    </nav>
  </b-collapse>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NavLink from "./NavLink/NavLink";

export default {
  name: "Sidebar",
  components: { NavLink  },
  data() {
    return { };
  },
  methods: {
    ...mapActions("layout", ["changeSidebarActive", "switchSidebar"]),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split("/");
      paths.pop();
      this.changeSidebarActive(paths.join("/"));
    }
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState("layout", {
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement
    })
  }
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
