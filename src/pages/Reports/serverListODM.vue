<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="fw-semi-bold">ODM Server List</h4>
      <div class="page-letters"></div>
    </div>
    <br/>
    <div class="col-md-12 text-right full-row mt-5"> 
      <small> </small>
    </div>
    <div class="col-md-12 text-right full-row">
       <b-button class="badge badge-resize excel-color" @click="downloadExport()">
       <i class="glyphicon glyphicon-console"/>
       Export to Excel</b-button>
    </div>
    <div class="col-md-12 table-card">
      <table class="table table-hover table-striped ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Site Name</th>
            <th scope="col">Server Name</th>
            <th scope="col">Ip Address</th>
            <th scope="col">DNS Name</th>
            <th scope="col">Service</th>
            <th scope="col">ODM</th>
            <th scope="col">Operating System</th>
            <th scope="col">Responsible</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(s, i) in this.list" :key="i">
                <th scope="row">{{i+1}}</th>
                <td>{{s.siteName}}</td>
                <td>{{s.serverName}}</td>
                <td>{{s.ipAddress}}</td>
                <td>{{s.dnsName}}</td>
                <td>{{s.service}}</td>
                <td v-if="s.odmStatus">{{s.odmStatus}}</td>
                <td v-else>No-Data</td>
                <td>{{s.operatingSystem}}</td>
                <td>{{s.responsible}}</td>
            </tr>
            <tr>  <td v-if="this.list.length <1 || this.list==null" colspan="9" align="center"> <span>Record is empty!</span> </td> </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-12 text-center" v-if="this.isLoading">
      <img src="@/assets/svg/loading.svg"/>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from "vuex"
import { getOdmExportSearchList, getOdmExportList } from '@/api/reports/odmstatus';
export default {
   data(){
     return {
       isLoading: true
     } 
   },
   computed: {
     ...mapGetters({
       list: 'odmstatusreport/GET_LIST',
       isLast: 'odmstatusreport/GET_ISLAST',
       isSearch: 'search/Get_ISSEARCH'
     })
   },
   created(){
     this.actionSearch();
     this.setList([])
     this.getOdmList()
     window.addEventListener("scroll", this.handleScroll);
   },
   destroyed(){
     window.removeEventListener("scroll", this.handleScroll);
   },
   methods:{
     ...mapMutations({
       increase_page: 'odmstatusreport/INCREASE_PAGE',
       setList: 'odmstatusreport/SET_LIST',
     }),
     ...mapActions({
       actiongetlist: 'odmstatusreport/action_getList',
       actionSearch: 'search/action_change_page'
     }),
     getOdmList(){
       this.isLoading = true
       this.actiongetlist().then(() => {
         this.isLoading = false
      })
    },
      downloadExport(){
        if (this.isSearch) {
          let searchText = this.$store.state.search.search_text;
          getOdmExportSearchList(searchText);
        }
        else{
          getOdmExportList();
        }
     },
     handleScroll(){
        let bottomOfWindow =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
          window.innerHeight ===
        document.documentElement.offsetHeight;

      if (bottomOfWindow && !this.isLast && !this.isLoading) {
        this.increase_page();
        this.getOdmList()
      }
     }
   }
}
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
  height: 100%;
}
</style>