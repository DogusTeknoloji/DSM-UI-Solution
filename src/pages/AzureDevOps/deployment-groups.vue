<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="fw-semi-bold">Deployment Groups</h4>
      <div class="page-letters"></div>
    </div>
    <div class="col-md-12 table-card">
      <table class="table table-hover table-striped">
       <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"><a>Project Name</a></th>
            <th scope="col"><a>Deployment Group Name</a></th>
            <th scope="col"><a>Deployment Group Pool</a></th>
            <th scope="col"><a>Machine Count</a></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, i) in this.list" :key="i">
              <th scope="row">{{i+1}}</th>
              <td>{{p.projectName}}</td>
              <td>{{p.deploymentGroupName}}</td>
              <td>{{p.deploymentGroupPool}}</td>
              <td v-if="p.machineCount == 0">{{p.machineCount}}<div class="badge badge-warning text-white tab">No Machine Assigned</div></td>
              <td v-else>{{p.machineCount}}</td>
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

import { mapGetters } from "vuex";

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
      list: "azdevopsdepgroups/GET_LIST",
      isSearch:"search/Get_ISSEARCH"
    })
  },
  created() {
    this.$store.dispatch("search/action_change_page");
    this.$store.commit("azdevopsdepgroups/SET_LIST", []);
  },
  destroyed() {
  },
  mounted() {
    this.getDeploymentGroups();
  },
  methods: {
    getDeploymentGroups() {
      this.isLoading = true;
      this.$store.dispatch("azdevopsdepgroups/actionGetDeploymentGroups").then(
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
.tab{
  margin-left: 15px;
}
</style>