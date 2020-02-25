<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="fw-semi-bold">Overall Disk Status</h4>
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
            <th scope="col">Company Name</th>
            <th scope="col">Server Name</th>
            <th scope="col">Last Check Date</th>
            <th scope="col">Volume</th>
            <th scope="col">Disk Capacity</th>
            <th scope="col">Used Disk Space</th>
            <th scope="col">Free Disk Space</th>
            <th scope="col">Responsible</th>
          </tr>
        </thead>
        <tbody>
          
          <tr v-for="(s, i) in this.list" :key="i" @click="gotoServer(s)">
            <th scope="row">{{i+1}}</th>
            <td>{{s.companyName}}</td>
            <td>{{s.serverName}}</td>
            <td>{{s.lastCheckDate}}</td>           
            <td>{{s.volumeName}}</td>
            <td>{{s.diskCapacity}}</td>
            <td>{{s.usedDiskSpace}}</td>
            <td v-if="s.freePercentage < 5"><div class="badge text-white badge-danger">Critical Disk Space!</div>  {{s.freeDiskSpace}}</td>
            <td v-else-if="s.freePercentage > 4 && s.freePercentage <10 "><div class="badge text-gray-dark badge-warning">Warning!</div>  {{s.freeDiskSpace}}</td>
            <td v-else>{{s.freeDiskSpace}}</td>
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
import {getExportList } from '@/api/reports/overalldiskstatus/'

export default {
  name: "OverallDiskStatus",
  components: {
    Widget
  },
  data() {
    return {
      detailVisible: false,
      solutionVisible: false,
      textarea: "",
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters({
      list: "odsreport/GET_LIST",
      page: "odsreport/GET_PAGE",
      isLast: "odsreport/GET_ISLAST",
    })
  },
  mounted() {
    this.getDiskList();
  },
  methods: {
    ...mapMutations({
      increase_page: "odsreport/INCREASE_PAGE"
    }),
        ...mapActions({
      action_getList:"odsreport/action_getList",
     
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
        this.getDiskList();
      }
    },
    getDiskList() {
      this.action_getList().then(
        () => {
          this.isLoading = false;
        }
      );
    },
    gotoServer(s) {
      this.$router.push("/app/server/" + s.serverId);
    },
     downloadExport(){
      getExportList();
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