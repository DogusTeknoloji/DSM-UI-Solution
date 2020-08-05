<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="fw-semi-bold">Database Servers</h4>
      <div class="page-letters"></div>
    </div>
    <br />
    <div class="col-md-12 text-right full-row">
      <!--  <small>Last Check: {{ checkDate }}</small>-->
    </div>
    <div class="col-md-12 text-right full-row">
      <a id="resetOrder" class="link-hidden" @click="resetOrder()"
        >Clear Order
      </a>
      <b-button
        class="badge badge-resize excel-color"
        @click="downloadExport()"
      >
        <i class="glyphicon glyphicon-console" />
        Export to Excel</b-button
      >
    </div>
    <br />
    <div class="col-md-12 table-card">
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <a id="order-item-serverName" @click="orderby('serverName')"
                >Server Name <i id="order-icon-serverName"
              /></a>
            </th>
            <th scope="col">
              <a id="order-item-owner" @click="orderby('owner')"
                >Owner <i id="order-icon-owner"
              /></a>
            </th>
            <th scope="col">
              <a id="order-item-environment" @click="orderby('environment')"
                >Environment <i id="order-icon-environment"
              /></a>
            </th>
            <th scope="col">
              <a id="order-item-ipAddress"
                >IP Address
                <i id="order-icon-ipAddress" @click="orderby('ipAddress')"
              /></a>
            </th>
            <th scope="col">
              <a id="order-item-version" @click="orderby('version')"
                >Version <i id="order-icon-version"
              /></a>
            </th>
            <th scope="col">
              <a
                id="order-item-operatingsystem"
                @click="orderby('operatingsystem')"
                >Operating System <i id="order-icon-operatingsystem"
              /></a>
            </th>
            <th scope="col">
              <a id="order-item-description"
                >Description <i id="order-icon-description"
              /></a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(s, i) in this.list" :key="i" @click="gotoServer(s)">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ s.serverName }}</td>
            <td>{{ s.owner }}</td>
            <td>{{ s.environment }}</td>
            <td>{{ s.ipAddress }}</td>
            <td>{{ s.version }}</td>
            <td>{{ s.osversion }}</td>
            <td>{{ s.description, }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-12 text-center" v-if="this.isLoading">
      <img src="@/assets/svg/loading.svg" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import {
  getExportList,
  getExportSearchList,
  getServerList,
} from "@/api/portal/";

export default {
  name: "ServerList",
  components: {},
  data() {
    return {
      orderColumn: "",
      orderPosition: 0,
      detailVisible: false,
      solutionVisible: false,
      textarea: "",
      isLoading: true,
      rows: [getServerList(1)],
      columns: [
        "serverName",
        "owner",
        "environment",
        "ipAddress",
        "version",
        "operatingSystem",
        "description",
      ],
      options: {
        filterByColumn: true,
        perPage: 50,
        texts: {
          filter: "Filter:",
          filterBy: "Filter by {column}",
          count: " ",
        },
        pagination: { chunk: 10, dropdown: true },
        filterable: [
          "serverName",
          "owner",
          "environment",
          "ipAddress",
          "version",
          "operatingSystem",
        ],
        headings: {
          serverName: "Server Name",
          owner: "Owner",
          environment: "Environment",
          ipAddress: "IP Address",
          version: "Version",
          operatingSystem: "Operating System",
          description: "Descrition",
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      list: "portal/GET_LIST",
      page: "portal/GET_PAGE",
      isLast: "portal/GET_ISLAST",
      checkDate: "portal/GET_CHECKDATE",
      isSearch: "search/Get_ISSEARCH",
    }),
  },
  created() {
    this.$store.dispatch("search/action_change_page");
    this.$store.commit("portal/SET_LIST", []);
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.getServerList();
    this.getCheckDate();
  },
  methods: {
    ...mapMutations({
      increase_page: "portal/INCREASE_PAGE",
    }),
    ...mapActions({}),
    handleScroll() {
      let bottomOfWindow =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
          window.innerHeight ===
        document.documentElement.offsetHeight;

      if (bottomOfWindow && !this.isLast && !this.isSearch && !this.isLoading) {
        this.increase_page();
        this.getServerList();
      }
    },
    getServerList() {
      this.isLoading = true;
      this.$store.dispatch("portal/action_getList").then(() => {
        this.isLoading = false;
      });
    },
    gotoServer(s) {
      this.isLoading = false;
      this.$router.push(
        "/app/databasePortalDetails/" + s.id + "-" + s.serverName
      );
    },
    getCheckDate() {
      this.$store.dispatch("portal/action_getCheckDate").then(() => {});
    },
    downloadExport() {
      if (this.isSearch) {
        let searchText = this.$store.state.search.search_text;
        getExportSearchList(searchText);
      } else {
        getExportList();
      }
    },
    orderby(field) {
      var resetLink = document.getElementById("resetOrder");
      resetLink.setAttribute("class", "link");

      if (this.orderColumn != "") {
        var orderItemPrevASC = document.getElementById(
          "order-icon-" + this.orderColumn
        );
        orderItemPrevASC.removeAttribute("class");
      }

      if (this.orderColumn != field) {
        this.orderPosition = -1;
      }

      if (this.orderPosition == 0) {
        this.orderPosition = 1;

        var orderItemASC = document.getElementById("order-icon-" + field);
        orderItemASC.setAttribute("class", "fa fa-arrow-up");
      } else if (this.orderPosition == 1 || this.orderPosition == -1) {
        this.orderPosition = 0;

        var orderItemDESC = document.getElementById("order-icon-" + field);
        orderItemDESC.setAttribute("class", "fa fa-arrow-down");
      }

      this.$store.commit("portal/SET_ORDER_COL", field);
      this.$store.commit("portal/SET_ORDER_POS", this.orderPosition);
      this.$store.commit("portal/SET_PAGE", 1);
      this.$store.commit("portal/SET_LIST", []);

      this.getServerList();

      this.orderColumn = field;
    },
    resetOrder() {
      if (this.orderColumn != "") {
        var orderItemPrevASC = document.getElementById(
          "order-icon-" + this.orderColumn
        );
        orderItemPrevASC.removeAttribute("class");
      }
      this.orderColumn = "";
      this.orderPosition = -1;
      var resetLink = document.getElementById("resetOrder");
      resetLink.setAttribute("class", "link-hidden");

      this.$store.commit("portal/SET_ORDER_COL", null);
      this.$store.commit("portal/SET_ORDER_POS", -1);
      this.$store.commit("portal/SET_PAGE", 1);
      this.$store.commit("portal/SET_LIST", []);
      this.getServerList();
    },
  },
};
</script>

<style lang="scss" scoped>
.page-letters {
  display: flex;
}
tbody {
  tr {
    cursor: pointer;
  }
}
.full-row {
  margin-left: 20px;
}
.excel-color {
  background-color: #21a366;
  color: #ffffff;
}
.excel-color:hover {
  background-color: #217346;
  color: #ffffff;
}
.badge-resize {
  height: 26px;
}
.link {
  color: #213773;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 9pt;
}
.link-hidden {
  visibility: hidden;
}
</style>
