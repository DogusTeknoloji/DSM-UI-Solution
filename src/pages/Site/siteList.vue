<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="fw-semi-bold">Sites</h4>
      <div class="page-letters"></div>
    </div>
    <br />
    <div class="col-md-12 text-right full-row">
       <a id="resetOrder" class="link-hidden" @click="resetOrder()">Clear Order </a>
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
            <th scope="col"><a id="order-item-name" @click="orderby('name')">Site Name <i id="order-icon-name"/></a></th>
            <th scope="col">Ip</th>
            <th scope="col">Ports</th>
            <th scope="col">Host</th>
            <th scope="col"><a id="order-item-appType" @click="orderby('appType')">App Type <i id="order-icon-appType"/></a></th>
            <th scope="col"><a id="order-item-machineName" @click="orderby('machineName')">Machine Name <i id="order-icon-machineName"/></a></th>
            <th scope="col"><a id="order-item-applicationPoolName" @click="orderby('applicationPoolName')">Pool Name <i id="order-icon-applicationPoolName"/></a></th>
            <th scope="col"><a id="order-item-physicalPath" @click="orderby('physicalPath')">Physical Path <i id="order-icon-physicalPath"/></a></th>
            <th scope="col"><a id="order-item-logFileDirectory" @click="orderby('logFileDirectory')">Log File Directory <i id="order-icon-logFileDirectory"/></a></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(s, i) in this.list" :key="i" @click="gotoSite(s)">
            <th scope="row">{{i+1}}</th>
            <td>{{s.siteName}}</td>
            <td>{{s.ipAddress}}</td>
            <td>{{s.port}}</td>
            <td>{{s.hostName}}</td>
            <td>{{s.appType}}</td>
            <td>{{s.machinename}}</td>
            <td>{{s.appPoolName}}</td>
            <td>{{s.physicalPath}}</td>
            <td>{{s.logFileDirectory}}</td>
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
import { mapGetters, mapMutations } from "vuex";
import {getExportList , getExportSearchList } from '@/api/site/'
export default {
  name: "SiteList",
  components: {
    
  },
  data() {
    return {
      orderColumn: "",
      orderPosition: 0,
      detailVisible: false,
      solutionVisible: false,

      textarea: "",
      isLoading: true
    };
  },
  computed: {
    ...mapGetters({
      list: "site/GET_LIST",
      page: "site/GET_PAGE",
      isLast: "site/GET_ISLAST",
      isSearch:"search/Get_ISSEARCH"
    })
  },
  created() {
    this.$store.dispatch("search/action_change_page");
    this.$store.commit("site/SET_LIST", []);
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.getSiteList();
  },
  methods: {
        ...mapMutations({
      increase_page: "site/INCREASE_PAGE"

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
      if (bottomOfWindow && !this.isLast && !this.isSearch && !this.isLoading) {
        this.increase_page();
        this.getSiteList();
      }
    },
    getSiteList() {
      this.isLoading = true;
      this.$store.dispatch("site/action_getList").then(
        () => {
          this.isLoading = false;
        }
      );
    },
    gotoSite(s) {
      this.isLoading = true;
      this.$store.dispatch("site/action_getSite", s.siteId).then(
        () => {
          this.isLoading = false;
          this.$router.push("/app/site/" + s.siteId);
        }
      );
    },
     downloadExport(){
       if (this.isSearch){
         let searchText = this.$store.state.search.search_text;
         getExportSearchList(searchText);
       }
       else{
        getExportList();
      }
    },
    orderby(field){

      var resetLink = document.getElementById("resetOrder");
      resetLink.setAttribute("class","link");

      if (this.orderColumn != ""){
        var orderItemPrevASC =  document.getElementById('order-icon-'+ this.orderColumn);
        orderItemPrevASC.removeAttribute("class");
      }

      if (this.orderColumn!= field){
        this.orderPosition = -1;
      }

      if (this.orderPosition == 0){
        this.orderPosition = 1;
        
        var orderItemASC = document.getElementById('order-icon-' + field);
        orderItemASC.setAttribute("class","fa fa-arrow-up");
      }
      else if (this.orderPosition == 1 || this.orderPosition == -1){
        this.orderPosition = 0;

        var orderItemDESC = document.getElementById('order-icon-' + field);
        orderItemDESC.setAttribute("class","fa fa-arrow-down");
      }

      this.$store.commit("site/SET_ORDER_COL",field);
      this.$store.commit("site/SET_ORDER_POS",this.orderPosition);
      this.$store.commit("site/SET_PAGE", 1);
      this.$store.commit("site/SET_LIST", []);

      this.getSiteList();

      this.orderColumn=field;

    },
    resetOrder(){
      if (this.orderColumn != ""){
        var orderItemPrevASC =  document.getElementById('order-icon-'+ this.orderColumn);
        orderItemPrevASC.removeAttribute("class");
      }
      this.orderColumn = "";
      this.orderPosition = -1;
      var resetLink =  document.getElementById("resetOrder");
      resetLink.setAttribute("class","link-hidden");

      this.$store.commit("site/SET_ORDER_COL",null);
      this.$store.commit("site/SET_ORDER_POS",-1);
      this.$store.commit("site/SET_PAGE", 1);
      this.$store.commit("site/SET_LIST", []);
      this.getSiteList();
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
.link{
  color: #213773;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 9pt;
}
.link-hidden{
  visibility: hidden;
}
</style>