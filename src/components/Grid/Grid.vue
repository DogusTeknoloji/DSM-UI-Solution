<template>
  <div style="width:100%">
      <h4 class="fw-semi-bold">{{title}}</h4>
    <div class="col-md-12 table-card">
      <table class="table  table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" v-for="(item, index) in thList" :key="index">
                {{item.title}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(s, i) in this.list" :key="i" @click="goto(s[navigate.id])" style="width:100%">
            <th scope="row">{{i+1}}</th>
            <td v-for="(item, index) in thList" :key="index">
                {{s[item.name]}}
            </td>
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
export default {
  name: "Grid",
  props: {
    title:{ type: String, default: null },
    list: { type: Array, default: null },
    thList: { type: Array, default: null },
    isLoading: { type: Boolean, default: false },
    page: { type: Number, default: 0 },
    moduleName: { type: String, default: "" },
    navigate:{type: Object, default: null, }
  },
  methods:{
    goto(id) {
      this.$router.push(this.navigate.url +"/"+ id);
    }
  }
};
</script>
<style lang="scss" scoped>
tbody {
  tr {
      width: 100%;
    cursor: pointer; 
    td{
        width: auto;
    }
    td:last-child {
    }
}
.table-reponsive{
    display: table;

}
}
</style>