<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="fw-semi-bold">Deployment Agents</h4>
      <div class="page-letters"></div>
    </div>
    <div class="col-md-12 table-card">
      <table class="table table-hover table-striped">
       <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"><a>Project Name</a></th>
            <th scope="col"><a>Agent Name</a></th>
            <th scope="col"><a>Agent Version</a></th>
            <th scope="col"><a>Operating System</a></th>
            <th scope="col"><a>Status</a></th>
            <th scope="col"><a>Agent Install Date</a></th>
            <th scope="col"><a>Status Changed Date</a></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, i) in this.list" :key="i">
            <th scope="row">{{i+1}}</th>
            <td>{{p.projectName}}</td>
            <td>{{p.agentName}}</td>
            <td>{{p.agentVersion}}</td>
            <td>{{p.operatingSystem}}</td>
            <td v-if="p.status == 'online'"><div class="badge badge-success text-white">{{p.status}}</div></td>
            <td v-else-if="p.status == 'offline'"><div class="badge badge-danger text-white">{{p.status}}</div></td>
            <td>{{p.createdOn}}</td>
            <td>{{p.statusChangedOn}}</td>
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

export default {
  name: "AzureDevopsDeploymentAgents",
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
      list: "azdevopsdepagents/GET_LIST",
      isSearch:"search/Get_ISSEARCH"
    })
  },
  created() {
    this.$store.dispatch("search/action_change_page");
    this.$store.commit("azdevopsdepagents/SET_LIST", []);
  },
  destroyed() {
  },
  mounted() {
    this.getDeploymentGroups();
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
    }),
    getDeploymentGroups() {
      this.isLoading = true;
      this.$store.dispatch("azdevopsdepagents/actionGetDeploymentAgents").then(
        () => {
          this.isLoading = false;
        },
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
.full-row{
  margin-left: 20px;
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