<template>
  <div class="row">
    <Grid
      :title="'Servers'"
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
  name: "ServerList",
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
        { name: "machineName", title: "Server Name" },
        { name: "ipAddress", title: "Ip Address" },
        { name: "dnsName", title: "DNS Name" },
        { name: "operatingSystem", title: "Operating System" },
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
      list: "server/GET_LIST",
      page: "server/GET_PAGE"
    })
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
    handleScroll(event) {
      let bottomOfWindow =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) +
          window.innerHeight ===
        document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        this.increase_page();
        this.getServerList();
      }
    },
    getServerList() {
      this.isLoading = true;
      this.$store.dispatch("server/action_getList").then(
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