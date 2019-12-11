<template>
  <div class="row">
  <div class="col-md-12">
            <h4 class="fw-semi-bold">Sites</h4>
            <div class="page-letters">
            
            </div>
  
  </div>
            <br />

            <div class="col-md-12 table-card">
              <table class="table  table-responsive table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Site Name</th>
                    <th scope="col">Ip </th>
                    <th scope="col">Ports</th>
                    <th scope="col">Host</th>
                    <th scope="col">App Type</th>
                    <th scope="col">Machine Name</th>
                    <th scope="col">Pool Name</th>
                    <th scope="col">Pyhsical Path</th>
                    <th scope="col">Log File Directory</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(s, i) in this.list" :key="i" @click="gotoSite(s)" >
                    <th scope="row">{{i+1}}</th>
                    <td>{{s.siteName}}</td>
                    <td>{{s.ipAddress}} </td>
                    <td>{{s.port}}</td>
                    <td>{{s.hostName}}</td>
                    <td>{{s.appType}}</td>
                    <td>{{s.machinename}}</td>
                    <td>{{s.appPoolName}}</td>
                    <td>{{s.physicalPath}}</td>
                    <td>{{s.logFileDirectory}}</td>
                  </tr>

          
                </tbody>
              </table>
            </div>
            <div class="col-md-12 text-center" v-if="this.isLoading">
                    <img src="@/assets/svg/loading.svg"/>
            </div>
            
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";

export default {
  name: "SiteList",
  components: {
    Widget
  },
  data() {
    return {
      detailVisible: false,
      solutionVisible:false,
      page:1,
    
      textarea: "",
      list:[], 
      isLoading:true
    };
  },
   created () {
       this.page=1;
       this.list=[];
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.getSiteList();
  },
  methods: {
       handleScroll (event) {
           let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;

    if (bottomOfWindow) 
        {
        this.page++;
    this.getSiteList();
    }
   
    },
    getSiteList(){
          this.isLoading=true;
          this.$store.dispatch("site/action_getSiteList", this.page).then(
          res => {
              this.list.push.apply(this.list, res)
           
              this.isLoading=false;
          },
          err => {
            console.log(err);
          }
        );
    },
    gotoSite(s){
      console.log(s);
          this.isLoading=true;
          this.$store.dispatch("site/action_getSite", s.siteId).then(
          res => {
              console.log(res);
              this.isLoading=false;
              this.$router.push('/app/site/'+s.siteId);
          },
          err => {
            console.log(err);
          }
        );
    }
  },
};
</script>

<style lang="scss" scoped>
.page-letters{
    display:flex;
}
tbody{
tr{
  cursor: pointer;
}
}

</style>