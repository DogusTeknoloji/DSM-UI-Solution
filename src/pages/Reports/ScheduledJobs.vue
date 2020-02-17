<template>
  <div class="row">
    <Grid
      :title="'Scheduled Job List'"
      :thList="thList"
      :isLoading="isLoading"
      :list="GET_LIST"
      :navigate="{url:'#',id:null}"
    ></Grid>
  </div>
</template>

<script>
import { mapGetters, mapActions,mapMutations } from "vuex";
import Widget from "@/components/Widget/Widget";
import Grid from "@/components/Grid/Grid";
import ReportModule from '@/store/ScheduledJobsReportModule';

export default {
  name: "ScheduledJobs",
  components: {
    Widget,
    Grid
  },
  data() {
    return {
      detailVisible: false,
      solutionVisible: false,
      textarea: "",
      isLoading: true,
      thList: [
        { name: "jobDescription", title: "Job Description" },
        { name: "owner", title: "Owner" },
        { name: "hostType", title: "Host Type" },
        { name: "hostName", title: "Host Name" },
        { name: "repeatTime", title: "Repeat Time" },       
        { name: "jobName", title: "Job Name" }
      ]
    };
  },
  created() {
    this.$store.registerModule("JobReport",ReportModule);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy(){
    this.$store.unregisterModule("JobReport");
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters('JobReport',['GET_LIST','GETPAGE','GET_ISLAST'])
  },
  mounted() {
    this.getScheduledJobList();
  },
  methods: {
    ...mapMutations("JobReport",{increase_page: "INCREASE_PAGE"}),
    ...mapActions("JobReport",["action_getList"]),
    handleScroll(event) {
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
        res => {
          this.isLoading = false;
        },
        err => {
          console.log(err);
        }
      );
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
</style>