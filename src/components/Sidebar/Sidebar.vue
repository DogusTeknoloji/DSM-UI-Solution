<template>
  <b-collapse class="sidebar-collapse" id="sidebar-collapse" :visible="sidebarOpened">
    <nav :class="{sidebar: true}">
      <header class="logo">
        <router-link to="/app/dashboard">
          <span class="fw-semi-bold">D</span>SM
        </router-link>
      </header>
      <ul class="nav">
        <NavLink
          :activeItem="activeItem"
          header="Dashboard"
          link="/app/dashboard"
          iconName="fi flaticon-home"
          index="dashboard"
          isHeader
        />
        <h5 class="navTitle">PAGES</h5>
        <NavLink
          header="Site"
          link="/app/site"
          iconName="glyphicon glyphicon-globe"
          index="site"
          isHeader
        />
        <NavLink
          header="Server"
          link="/app/server"
          iconName="glyphicon glyphicon-tasks"
          index="server"
          isHeader
        />
        <NavLink
          header="Company"
          link="/app/company"
          iconName="fa fa-sitemap"
          index="company"
          isHeader
        />

        <NavLink
          :activeItem="activeItem"
          header="Reports"
          link="/app/reports"
          iconName="glyphicon glyphicon-file"
          index="reports"
          :childrenLinks="[
          { header: 'Server Ownership', link: '/app/reports/server-ownership-status' },
          { header: 'Most Called Urls', link: '/app/reports/most-called-urls' },
          { header: 'Longest Response Time', link: '/app/reports/longest-response-time' },
        ]"
        />
      </ul>
    </nav>
  </b-collapse>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NavLink from "./NavLink/NavLink";

export default {
  name: "Sidebar",
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: "Sales Report",
          value: 15,
          footer: "Calculating x-axis bias... 65%",
          color: "info"
        },
        {
          id: 1,
          title: "Personal Responsibility",
          value: 20,
          footer: "Provide required notes",
          color: "danger"
        }
      ]
    };
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
