<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="fw-semi-bold">Servers</h4>
      <div class="page-letters"></div>
    </div>
    <br />

    <div class="col-md-12 table-card">
      <table class="table table-responsive table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Server Name</th>
            <th scope="col">Ip Address</th>
            <th scope="col">DNS Name</th>
            <th scope="col">Company</th>
            <th scope="col">Operatin System</th>
            <th scope="col">Responsible</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(s, i) in this.list" :key="i" @click="gotoServer(s)">
            <th scope="row">{{i+1}}</th>
            <td>{{s.machineName}}</td>
            <td>{{s.ipAddress}}</td>
            <td>{{s.dnsName}}</td>
            <td>{{s.companyName}}</td>
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
import { mapGetters, mapActions } from "vuex";
import Widget from "@/components/Widget/Widget";

export default {
  name: "ServerList",
  components: {
    Widget
  },
  data() {
    return {
      detailVisible: false,
      solutionVisible: false,
      page: 1,

      textarea: "",
      list: [],
      isLoading: true
    };
  },
  created() {
    this.page = 1;
    this.list = [];
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {},
  mounted() {
    this.getServerList();
  },
  methods: {
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
        this.getServerList();
      }
    },
    getServerList() {
      this.isLoading = true;
      this.$store.dispatch("server/action_getServerList", this.page).then(
        res => {
          this.list.push.apply(this.list, res);

          this.page++;

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