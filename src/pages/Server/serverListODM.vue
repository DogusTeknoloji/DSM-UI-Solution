<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="fw-semi-bold">ODM Reports</h4>
      <div class="page-letters"></div>
    </div>
    <br/>
    <br/>
      <table class="table table-hover table-striped ">
        <thead>
          <tr>
            <th scope="col">#</th>
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
                <td>{{s.machineName}}</td>
                <td>{{s.ipAddress}}</td>
                <td>{{s.dnsName}}</td>
                <td>{{s.serviceName}}</td>
                <td>{{s.ODM}}</td>
                <td>{{s.operatingSystem}}</td>
                <td>{{s.responsible}}</td>
            </tr>
            <tr>  <td v-if="this.list.length <1 || this.list==null" colspan="9" align="center"> <span>Record is empty!</span> </td> </tr>
        </tbody>
      </table>
    <div class="col-md-12 text-center" v-if="this.isLoading">
      <img src="@/assets/svg/loading.svg"/>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from "vuex"
export default {
   data(){
     return {
       isLoading: true
     } 
   },
   computed: {
     ...mapGetters({
       list: 'odmstatusreport/GET_LIST'
     })
   },
   methods:{
     ...mapMutations({
       increase_page: 'odmstatusreport/INCREASE_PAGE',
     }),
     ...mapActions({
       actiongetlist: 'odmstatusreport/actions_getList'
     }),
     getOdmList(){
       this.loading = true
       this.actiongetlist().then(() => {this.loading = false})
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

      if (bottomOfWindow && !this.isLast  && !this.isSearch && !this.isLoading) {
        this.increase_page();
        this.getOdmList();
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