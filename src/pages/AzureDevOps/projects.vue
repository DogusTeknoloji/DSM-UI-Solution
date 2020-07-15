<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="fw-semi-bold">Projects</h4>
      <div class="page-letters"></div>
    </div>
    <div class="col-md-12 table-card">
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"><a>Name</a></th>
            <th scope="col"><a>Public Visible </a></th>
            <th scope="col"><a>Revision</a></th>
            <th scope="col"><a>Last Update Date</a></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, i) in this.list" :key="i">
            <th scope="row">{{i+1}}</th>
            <td>{{p.projectName}}</td>
            <td v-if="p.projectPublicVisibility">Yes</td>
            <td v-else>No</td>
            <td>{{p.projectRevision}}</td>
            <td>{{p.projectLastUpdateTime}}</td>
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
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters({
      list:  "azdevopsprojects/GET_LIST",
      isSearch:"search/Get_ISSEARCH"
    })
  },
  created() {
    this.$store.dispatch("search/action_change_page");
    this.$store.commit("azdevopsprojects/SET_LIST", []);
  },
  destroyed() {
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      this.isLoading = true;
      this.$store.dispatch("azdevopsprojects/actionGetProjects").then(
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