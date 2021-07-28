<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="fw-semi-bold">Scheduled Job List</h4>
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
            <th scope="col">Job Description</th>
            <th scope="col">Owner</th>
            <th scope="col">Host Type</th>
            <th scope="col">Host Name</th>
            <th scope="col">Repeat Time</th>
            <th scope="col">Job Name</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(s, i) in GET_LIST" :key="i">
                <th scope="row">{{i+1}}</th>
                <td>{{s.jobDescription}}</td>
                <td>{{s.owner}}</td>
                <td>{{s.hostType}}</td>
                <td>{{s.hostName}}</td>
                <td>{{s.repeatTime}}</td>
                <td>{{s.jobName}}</td>
            </tr>
            <tr>  <td v-if="GET_LIST.length <1 || GET_LIST==null" colspan="9" align="center"> <span>Record is empty!</span> </td> </tr>
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
import {getExportList } from '@/api/reports/scheduledjobs/'
import ReportModule from '@/store/modules/ScheduledJobsReportModule';
import SearchModule from '@/store/modules/search';

export default {
  name: "ScheduledJobs",
  components: {
    
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
    ...mapGetters('JobReport',['GET_LIST','GETPAGE','GET_ISLAST']),
    ...mapGetters('Search',['Get_ISSEARCH']),
  },
  created() {
    this.$store.registerModule("JobReport",ReportModule);
    this.$store.registerModule("Search", SearchModule);
    this.$store.commit("JobReport/SET_LIST",[]);
    this.action_change_page()
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy(){
    this.$store.unregisterModule("JobReport");
    this.$store.unregisterModule("Search");
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.getScheduledJobList();
  },
  methods: {
    ...mapMutations("JobReport",{increase_page: "INCREASE_PAGE"}),
    ...mapActions("JobReport",["action_getList"]),
    ...mapActions("Search",["action_change_page"]),
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
        this.getScheduledJobList();
      }
    },
    getScheduledJobList() {
      this.isLoading = true;
      this.action_getList().then(
        () =>{
           this.isLoading=false;
        }
      );
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