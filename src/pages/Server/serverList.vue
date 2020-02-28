<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="fw-semi-bold">Servers</h4>
      <div class="page-letters"></div>
    </div>
    <br />
    <div class="col-md-12 text-right full-row">
       <b-button class="badge badge-resize excel-color" @click="downloadExport()">
       <i class="glyphicon glyphicon-console"></i>
       Export to Excel</b-button>
    </div>
    <br/>
    <div class="col-md-12 table-card">
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Server Name</th>
            <th scope="col">Ip Address</th>
            <th scope="col">DNS Name</th>
            <th scope="col">Operating System</th>
            <th scope="col">Responsible</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(s, i) in this.list" :key="i" @click="gotoServer(s)">
            <th scope="row">{{i+1}}</th>
            <td>{{s.machineName}}</td>
            <td>{{s.ipAddress}}</td>
            <td>{{s.dnsName}}</td>
            <td>{{s.operatingSystem}}</td>
            <td>{{s.responsible}}</td>
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

import { mapGetters, mapActions,mapMutations } from "vuex";
import Widget from "@/components/Widget/Widget";
import {getExportList,getExportSearchList } from '@/api/server/'

export default {
  name: "ServerList",
  components: {
    Widget
  },
  data() {
    return {
      detailVisible: false,
      solutionVisible: false,
      textarea: "",
      isLoading: true
    };
  },
  computed: {
    ...mapGetters({
      list: "server/GET_LIST",
      page: "server/GET_PAGE",
      isLast: "server/GET_ISLAST",
      isSearch:"search/Get_ISSEARCH"
    })
  },
  created() {
    this.$store.dispatch("search/action_change_page");
    this.$store.commit("server/SET_LIST", []);
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.getServerList();
  },
  methods: {
    ...mapMutations({
      increase_page: "server/INCREASE_PAGE"

    }),
    ...mapActions({
    }),
    handleScroll() {
      let bottomOfWindow =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
          window.innerHeight ===
        document.documentElement.offsetHeight;

      if (bottomOfWindow && !this.isLast  && !this.isSearch) {
        this.increase_page();
        this.getServerList();
      }
    },
    getServerList() {
      this.isLoading = true;
      this.$store.dispatch("server/action_getList").then(
        () => {
          this.isLoading = false;
        },
      );
    },
    gotoServer(s) {
      this.isLoading = true;
      this.$router.push("/app/server/" + s.serverId);
    },
     downloadExport(){
       if (this.isSearch){
         let searchText = this.$store.state.search.search_text;
         getExportSearchList(searchText);
       }
       else{
         getExportList();
       }
    }
  }
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
.full-row{
  margin-left: 20px;
}
.excel-color
{
  background-color:#21a366;
  color: #ffffff;
}
.excel-color:hover
{
  background-color:#217346;
  color: #ffffff;
}
.badge-resize{
  height: 26px;
}
</style>