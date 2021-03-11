<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="fw-semi-bold">Servers</h4>
      <div class="page-letters"></div>
    </div>
    <br />
    <div class="col-md-12 text-right full-row">
      <small>Last Check: {{checkDate}}</small>
    </div>
    <div class="col-md-12 text-right full-row">
      <a id="resetOrder" class="link-hidden" @click="resetOrder()">Clear Order </a>
       <b-button class="badge badge-resize excel-color" @click="downloadExport()">
       <i class="glyphicon glyphicon-console"/>
       Export to Excel</b-button>
    </div>
    <br/>
    <div class="col-md-12 table-card">
      <div class="position-absolute">
        <ContextMenu ref="menu">
          <template slot-scope="{ contextData }">
            <ContextMenuItem @click.native="contextMenuCopyIpAddress(contextData.ipAddress)"> Copy Ip Address ({{ contextData.machineName }})</ContextMenuItem>
          </template>
        </ContextMenu>
      </div>
      <table class="table table-hover table-striped ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"><a id="order-item-serverName" @click="orderby('serverName')">Server Name <i id="order-icon-serverName"/></a></th>
            <th scope="col"><a id="order-item-ipAddress" @click="orderby('ipAddress')">Ip Address <i id="order-icon-ipAddress"/></a></th>
            <th scope="col"><a id="order-item-hostName" @click="orderby('hostName')">DNS Name <i id="order-icon-hostName"/></a></th>
            <th scope="col"><a id="order-item-serviceName" @click="orderby('serviceName')">Service <i id="order-icon-serviceName"/></a></th>
            <th scope="col"><a id="order-item-operatingSystem" @click="orderby('operatingSystem')">Operating System <i id="order-icon-operatingSystem"/></a></th>
            <th scope="col"><a id="order-item-responsible" @click="orderby('responsible')">Responsible <i id="order-icon-responsible"/></a></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(s, i) in this.list" :key="i" @click="gotoServer(s)" @contextmenu.prevent="$refs.menu.open($event, s)">
            <th scope="row">{{i+1}}</th>
            <td>{{s.machineName}}</td>
            <td>{{s.ipAddress}}</td>
            <td>{{s.dnsName}}</td>
            <td>{{s.serviceName}}</td>
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
import {getExportList,getExportSearchList,getServerList } from '@/api/server/';
import ContextMenu from '@/components/ContextMenu/ContextMenu';
import ContextMenuItem from '@/components/ContextMenu/ContextMenuItem';
export default {
  name: "ServerList",
  components: {
    ContextMenu,
    ContextMenuItem
  },
  data() {
    return {
      orderColumn: "",
      orderPosition: 0,
      detailVisible: false,
      solutionVisible: false,
      viewMenu: false,
      top: '0px',
      left: '0px',
      textarea: "",
      isLoading: true,
      rows: [getServerList(1)] ,
      columns: [ 'machineName','ipAddress','dnsName','operatingSystem','responsible'],
      options: {
                  filterByColumn: true,
                  perPage:50,
                  texts: {
                      filter: "Filter:",
                      filterBy: 'Filter by {column}',
                      count:' '
                  },
        pagination: { chunk:10,dropdown:true },
        filterable:['machineName','ipAddress','dnsName','operatingSystem','responsible'],
        headings: {
                      machineName: 'Server Name',
                      ipAddress: 'Ip Address',
                      dnsName: 'DNS Name',
                      operatingSystem: 'Operating System',
                      responsible: 'Responsible'
                  }
      },
    };
  },
  computed: {
    ...mapGetters({
      list: "server/GET_LIST",
      page: "server/GET_PAGE",
      isLast: "server/GET_ISLAST",
      checkDate: "server/GET_CHECKDATE",
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
    this.getCheckDate();
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

      if (bottomOfWindow && !this.isLast  && !this.isSearch && !this.isLoading) {
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
      this.isLoading = false;
      this.$router.push("/app/server/" + s.serverId);
    },
    getCheckDate(){
      this.$store.dispatch("server/action_getCheckDate").then( ()=>{});
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

      this.$store.commit("server/SET_ORDER_COL",field);
      this.$store.commit("server/SET_ORDER_POS",this.orderPosition);
      this.$store.commit("server/SET_PAGE", 1);
      this.$store.commit("server/SET_LIST", []);

      this.getServerList();

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

      this.$store.commit("server/SET_ORDER_COL",null);
      this.$store.commit("server/SET_ORDER_POS",-1);
      this.$store.commit("server/SET_PAGE", 1);
      this.$store.commit("server/SET_LIST", []);
      this.getServerList();
    },
    contextMenuCopyIpAddress(ipAddress){
      if (ipAddress !== null){
        var item = document.createElement("textarea");
        document.body.appendChild(item);
        item.value = ipAddress;
        item.select();
        document.execCommand('copy');
        document.body.removeChild(item);
      }
      this.$refs.menu.close();
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

.context-table{
  position: relative,
}

.context-absolute{
  position: absolute;
}
</style>