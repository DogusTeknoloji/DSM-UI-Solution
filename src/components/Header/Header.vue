<template>
  <b-navbar toggleable="md" class="header d-print-none">
    <b-navbar-nav class="navbar-nav-mobile ml-auto">
      <b-nav-text class="mr-3">
        <b-alert
          class="header-alert animated bounceIn delay-2s"
          dismissible
          v-model="showNavbarAlert"
        >
          <i class="fa fa-info-circle mr-1"></i> Check out Light Blue Settings
          on the right!
        </b-alert>
      </b-nav-text>
      <div class="form-inline d-sm-down-none mr-3">
        <b-input-group class="input-group-transparent d-sm-down-none mr-3">
          <b-input-group-text slot="prepend">
            <i class="la la-search"></i>
          </b-input-group-text>
          <b-input
            class="input-transparent"
            id="search-input"
            v-model="text"
            v-on:keyup.enter="search"
            placeholder="Search"
          />
        </b-input-group>
        <a
          style="margin-left:7px;background:none;border:none;color:black"
          @click="cancelSearch"
          v-show="isSearch"
          >Cancel</a
        >
      </div>
      <b-nav-item-dropdown right extra-menu-classes="py-0" :disabled="true">
        <template slot="button-content">
          <span class="avatar thumb-sm float-left mr-2">
            <img class="rounded-circle" :src="this.photo" alt="..." />
          </span>
          <span class="d-md-down-none d-lg-inline">
            <span class="fw-semi-bold">{{ this.displayName }}</span>
          </span>
          <span
            class="ml-2 circle bg-warning text-white fw-bold d-md-down-none d-lg-inline-block"
            >0</span
          >
        </template>
        <notifications />
      </b-nav-item-dropdown>
      <b-nav-item-dropdown
        no-caret
        right
        extra-menu-classes="dropdown-menu-messages"
        :disabled="true"
      >
        <template slot="button-content">
          <i class="la la-comment px-2" />
        </template>
        <!-- <b-dropdown-item>
          <span class="avatar thumb-sm float-left mr-3">
            <img class="rounded-circle" src="../../assets/people/a1.jpg" alt="..." />
          </span>
          <h6>
            Jane
            <span class="fw-semi-bold">Hew</span>
          </h6>
          <span class="fs-sm text-muted fw-thin">Hey, John! How is it going? ...</span>
        </b-dropdown-item>
        <b-dropdown-item>
          <span class="avatar thumb-sm float-left mr-3">
            <img class="rounded-circle" src="../../assets/people/a2.jpg" alt="..." />
          </span>
          <h6>
            Alies
            <span class="fw-semi-bold">Rumiancaŭ</span>
          </h6>
          <span class="fs-sm text-muted fw-thin">I will definitely buy this template</span>
        </b-dropdown-item>
        <b-dropdown-item>
          <span class="avatar thumb-sm float-left mr-3">
            <img class="rounded-circle" src="../../assets/people/a3.jpg" alt="..." />
          </span>
          <h6>
            Alexey
            <span class="fw-semi-bold">Kamandzirau</span>
          </h6>
          <span class="fs-sm text-muted fw-thin">I will definitely buy this template</span>
        </b-dropdown-item>
        <b-dropdown-item-button class="text-center">
          See all messages
          <i class="fa fa-arrow-right ml-1"></i>
        </b-dropdown-item-button>-->
      </b-nav-item-dropdown>
      <b-nav-item class="divider"></b-nav-item>
      <b-nav-item-dropdown no-caret right>
        <template slot="button-content">
          <i class="la la-cog px-2" />
        </template>
        <b-dropdown-item> <i class="la la-user" /> My Account </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Calendar</b-dropdown-item>
        <b-dropdown-item>
          Inbox &nbsp;&nbsp;
          <b-badge variant="danger" pill class="animated bounceIn">9</b-badge>
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item-button @click="logout">
          <i class="la la-sign-out" /> Log Out
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown
        no-caret
        right
        class="d-md-down-none"
        :disabled="true"
      >
        <template slot="button-content">
          <i class="la la-globe px-2" />
        </template>
        <b-dropdown-item>
          <span class="badge badge-danger mr-2">
            <i class="fa fa-bell-o"></i>
          </span>
          <span class="fs-sm">Check out this awesome ticket</span>
        </b-dropdown-item>
        <b-dropdown-item>
          <span class="badge badge-warning mr-2">
            <i class="fa fa-question-circle"></i>
          </span>
          <span class="fs-sm">Finish 2019 annual report</span>
        </b-dropdown-item>
        <b-dropdown-item>
          <span class="badge badge-success mr-2">
            <i class="fa fa-info-circle"></i>
          </span>
          <span class="fs-sm">Update Vue.js to the newest version</span>
        </b-dropdown-item>
        <b-dropdown-item>
          <span class="badge badge-info mr-2">
            <i class="fa fa-plus"></i>
          </span>
          <span class="fs-sm">Establish OKR system</span>
        </b-dropdown-item>
        <b-dropdown-item>
          <span class="badge badge-danger mr-2">
            <i class="fa fa-tag"></i>
          </span>
          <span class="fs-sm">Fill in time tracking</span>
        </b-dropdown-item>
        <b-dropdown-item-button class="text-center">
          See all tickets
          <i class="fa fa-arrow-right ml-1"></i>
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
      <b-nav-item class="d-md-down-none" @click="logout">
        <i class="la la-power-off px-2" />
      </b-nav-item>
      <b-nav-item class="d-md-none" @click="switchSidebarMethod">
        <i class="la la-navicon px-2" />
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Notifications from "@/components/Notifications/Notifications";

export default {
  name: "Header",
  components: { Notifications },
  computed: {
    ...mapState("layout", {
      sidebarClose: (state) => state.sidebarClose,
      sidebarStatic: (state) => state.sidebarStatic,
    }),
    ...mapGetters({
      displayName: "user/GET_DISPLAYNAME",
      isSearch: "search/Get_ISSEARCH",
      photo: "user/GET_PHOTO",
    }),
    text: {
      get() {
        return this.$store.state.search.search_text;
      },
      set(value) {
        this.$store.commit("search/SET_TEXT", value);
      },
    },
  },
  methods: {
    ...mapActions("layout", [
      "toggleSidebar",
      "toggleChat",
      "switchSidebar",
      "changeSidebarActive",
    ]),
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split("/");
        paths.pop();
        this.changeSidebarActive(paths.join("/"));
      }
    },

    getModule() {
      let moduleName = "";
      let moduleNameVue = null;
      let route = this.$route.name;
      console.log(route)
      switch (this.$route.name) {
        case "SiteList":
          moduleName = "site";
          break;
        case "Site":
          moduleName = "site";
          break;
        case "ServerList":
          moduleName = "server";
          break;
        case "CompanyList":
          moduleName = "company";
          break;
        case "DatabasePortal":
          moduleName = "databaseportal";
          break;
        case "ServerListODM":
          moduleName = "report/odmstatusreport";
          moduleNameVue = 'odmstatusreport';
          break;
        default:
          break;
      }
      return {
        moduleName: moduleName,
        moduleNameVue:moduleNameVue
        };
    },
    search() {
      let cModule = this.getModule();
      this.$store.dispatch("search/action_search", {
        cModule,
        text: this.text,
      });
    },
    cancelSearch() {
      this.text = "";
      let cModule = this.getModule();
      this.$store.dispatch("search/action_cancel", { cModule });
    },
    logout() {
      this.$store.dispatch("user/action_logout").then(() => {
        window.localStorage.setItem("authenticated", false);
        this.$router.push("/login");
      });
    },
  },
  created() {},

  data() {
    return {
      showNavbarAlert: false,
      searchText: "",
    };
  },
};
</script>

<style src="./Header.scss" lang="scss" scoped />
