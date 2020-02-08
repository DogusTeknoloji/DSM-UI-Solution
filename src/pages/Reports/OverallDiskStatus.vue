<template>
  <div class="row">
    <Grid
      :title="'Overall Disk Status'"
      :thList="thList"
      :isLoading="isLoading"
      :list="list"
      :navigate="{url:'/app/server',id:'serverId'}"
    ></Grid>
  </div>
</template>

<script>
import { mapGetters, mapActions,mapMutations } from "vuex";
import Widget from "@/components/Widget/Widget";
import Grid from "@/components/Grid/Grid";

export default {
  name: "OverallDiskStatus",
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
        { name: "companyName", title: "Company Name" },
        { name: "serverName", title: "Server Name" },
        { name: "lastCheckDate", title: "Last Check Date" },
        { name: "volumeName", title: "Volume" },
        { name: "diskCapacity", title: "Disk Capacity" },
        { name: "usedDiskSpace", title: "Used Disk Space" },
        { name: "freeDiskSpace", title: "Free Disk Space" },        
        { name: "responsible", title: "Responsible" }
      ]
    };
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
        this.getDiskList();
      }
    },
    getDiskList() {
      this.isLoading = true;
      this.action_getList().then(
        res => {
          this.isLoading = false;
        },
        err => {
          console.log(err);
        }
      );
    },
    gotoServer(s) {
      this.$router.push("/app/server/" + s.serverId);
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