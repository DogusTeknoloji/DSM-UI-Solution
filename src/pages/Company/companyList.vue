<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="fw-semi-bold">Companies</h4>
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
      
        <table class="table table-responsive table-hover table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Company Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(c, i) in this.list" :key="i" @click="gotoCompany(c)">
                    <th scope="row">{{i+1}}</th>
                    <td style="width:100%">{{c.name}}</td>
                </tr>

                <tr> 
                <td v-if="this.list.length <1 || this.list==null" colspan="9" align="center"> <span>Record is empty!</span> </td> 
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
import { mapGetters,mapMutations  } from "vuex";
import {getExportList,getExportSearchList } from '@/api/company'

export default {
  name: "CompanyList",
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
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters({
      list: "company/GET_LIST",
      page: "company/GET_PAGE",
      isLast: "company/GET_ISLAST",
      isSearch:"search/Get_ISSEARCH"
    })
  },
  mounted() {
    this.getServerList();
  },
  methods: {
   ...mapMutations({
      increase_page: "company/INCREASE_PAGE"

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

      if (bottomOfWindow && !this.isLast && !this.isSearch) {
        this.increase_page();
        this.getServerList();
      }
    },
    getServerList() {
      this.isLoading = true;
      this.$store.dispatch("company/action_getList").then(
        () => {
          this.isLoading = false;
        }
      );
    },
    gotoCompany(s) {
      this.$router.push("/app/company/" + s.companyId);
    },
    downloadExport(){
      if (this.isSearch){
        let searchText = this.$store.state.search.search_text;
        getExportSearchList(searchText);
      }
      else {
        getExportList();
      }
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