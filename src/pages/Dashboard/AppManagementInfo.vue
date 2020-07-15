<template>
  <div class="row">
    <h1 class="page-title">
      Application Management &nbsp;
      <small>
        <small>Toolbox</small>
      </small>
    </h1>
    <div class="col-md-12">
      <div class="page-letters"></div>
    </div>
    <br/>
    <div class="col-md-12 table-card text-center" v-if="forbidden_page">
       <h5> This operation is requires elevated permissions.</h5>
    </div>
      <div xs="12" class="col-lg-3" v-for="(s, i) in GET_LIST" :key="i">
        <section class="widget-padding-lg widget" v-if="!forbidden_page">
          <div class="widgetBody widget-body ">
            <div class="overflow-hidden">
              <div class="carousel-feature-widget text-center">
                <header class="text-left">
                  <h5 class="mt-sm mb-sm">#<span class="fw-semi-bold">{{(i+1)}}</span></h5>
                </header>
                <div class="h5 mt-lg mb-lg">
                  <img :src="s.image" 
                       alt="avatar" class="rounded-circle thumb64 mb-2 ">
                  <p class="value4 mt-lg">{{s.description}}</p><br/>
                  {{s.description}}
                </div>
                <footer>
                  <button @click="gotoLink(s.url)"  class="btn btn-inverse btn-block mt">
                    <span class="fw-semi-bold"> Open Page</span>
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </section>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import AMLModule from '@/store/modules/appmanagementlinks';

export default {
  name: "app-management-links",
  components: {
  },
  data() {
    return {
      detailVisible: false,
      solutionVisible: false,
      textarea: "",
      forbidden_page:false,
    };
  },
  computed: {
    ...mapGetters('modules/AppLink',['GET_LIST']),
  },
  created() {
    this.$store.registerModule("modules/AppLink",AMLModule);
    this.$store.commit("modules/AppLink/SET_LIST",[]);
  },
  mounted(){
    this.getAppLinks();
  },
  beforeDestroy(){
    this.$store.unregisterModule("modules/AppLink");
  },
  methods: {
    ...mapActions("modules/AppLink",["action_getList"]),
    getAppLinks() {
      this.action_getList().then(()=>{}).catch(err=>{
            if(err==403)
              this.forbidden_page=true;
          });
    },
    gotoLink(s){
      window.open(s,"_blank");
    },
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
a{
  color: red;
}
a:hover{
  color:purple;
}
.text-center {
    text-align: center!important;
}
.text-left {
    text-align: left!important;
}
.thumb64 {
    width: 64px!important;
    height: 64px!important;
}
</style>