<template>
  <div class="row">
    <b-col xs="12" md="12" style="height:100vh">
      <div class="site-header">
        <div style="display:flex">
          <div>
            <h1 class="page-title" style="margin:0">{{header.serverName}} &nbsp;</h1>
            <div style="display:inline">
              <h5 style="cursor:pointer"  @click="$router.push('/app/company/'+header.companyId)">{{header.companyName}}</h5>
            </div>
          </div>
        </div>
        <div class="site-status status-running">
          <div style="align-self: center;">
            <img src="../../assets/ok-128.png" width="48px" height="48px" alt srcset />
            <br />
          </div>

          <div class="site-status-text">
            <h4 style="font-family:Roboto; display:block;margin-top:12px">{{header.availability}}</h4>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <el-tabs v-model="activeName" @tab-click="handleTabClick()">
          <el-tab-pane label="General" name="general">
            <div class="row general-info">
              <div class="col-md-4">
                <div class="col-md-12 info-card">
                  <h5 class="general-info-header">Details</h5>
                  <table class="table">
                    <tr>
                      <td class="general-info-table-title">Domain:</td>
                      <td class="general-info-table-value">{{detail.domain}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">IP Address:</td>
                      <td class="general-info-table-value">{{detail.ipAddress}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Web Server:</td>
                      <td class="general-info-table-value">{{detail.webServer}}</td>
                    </tr>

                    <tr>
                      <td class="general-info-table-title">Operating System:</td>
                      <td class="general-info-table-value">{{detail.operatingSystem}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">CPU:</td>
                      <td class="general-info-table-value">{{detail.cpu}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Memory:</td>
                      <td class="general-info-table-value">{{detail.memory}}</td>
                    </tr>

                    <tr>
                      <td class="general-info-table-title">Last Backup:</td>
                      <td class="general-info-table-value">{{detail.lastBackup}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Site Count:</td>
                      <td class="general-info-table-value">{{detail.siteCount}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Online Site Count</td>
                      <td class="general-info-table-value">{{detail.onlineSiteCount}}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="col-md-4">
                <div class="col-md-12 info-card">
                  <h5 class="general-info-header">Disk Details</h5>

                  <table class="table">
                    <tr>
                      <td class="general-info-table-title">Volumes:</td>
                      <td class="general-info-table-value">{{detail.volumes}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Total Capacity</td>
                      <td class="general-info-table-value">{{detail.totalCapacity}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Percent Free</td>
                      <td class="general-info-table-value">{{detail.percentFree}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Last Check Date</td>
                      <td class="general-info-table-value">{{detail.lastCheckDate}}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <!-- Web Config - Other -->
              <div class="col-md-4">
                <div class="col-md-12 info-card">
                  <h5 class="general-info-header">Volume Details</h5>
                  <table class="table text-center">
                    unknown-data
                    <!-- <tr>
                      <td class="general-info-table-title">C:\</td>
                      <td>20 GB</td>
                      <td>80 GB</td>
                      <td class="general-info-table-value">100 GB ( 20% free)</td>
                    </tr> -->
               
                  </table>
                </div>
              </div>
            </div>

            <!-- 
              Net Framework Version

              Send Alert Mail When Unavailable
              App Type
              --- Web Config
              Web Config Last Backup Date
              Web Config Backup Directory

            -->
          </el-tab-pane>
          <el-tab-pane label="Sites" name="sites" :disabled="detail.siteCount==0">
            <h4 class="fw-semi-bold">Sites</h4>
            <br />
            <div class="col-md-12 table-card">
              <table class="table table-responsive table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Site Name</th>
                    <th scope="col">Physical Path</th>
                    <th scope="col">Domains</th>
                    <th scope="col">State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(s, i) in this.sites" :key="i">
                    <th scope="row">{{++i}}</th>
                    <td>
                      <router-link class="site-link" :to="{ name: 'Site', params: { id: s.siteId }}">{{s.siteName}}</router-link>
                    </td>

                    <td>{{s.physicalPath}}</td>
                    <td>{{s.domains}}</td>
                    <td>{{s.state}}</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </el-tab-pane>

          <el-tab-pane label="Statistics" :disabled="true" name="statistic">Task</el-tab-pane>
        </el-tabs>
      </div>
    </b-col>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Server",
  components: {},
  data() {
    return {
      activeName: "general"
    };
  },
  mounted(){
    this.fetch_detail(this.$route.params.id);
    this.fetch_header(this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      detail: "server/GET_SERVER_DETAILS",
      header: "server/GET_SERVER_HEADER",
      sites: "server/GET_SERVER_SITES"
    })
  },
  methods: {
    ...mapActions({
      fetch_detail: "server/action_getServerDetails",
      fetch_header: "server/action_getServerHeader",
      fetch_sites: "server/action_getServerSites"
    }),
    handleTabClick() {
      console.log(this.activeName);
      switch (this.activeName) {
        case "general":
          this.fetch_site(this.$route.params.id);
          break;
        case "sites":
          this.fetch_sites(this.$route.params.id);
          break;
     

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.site-link {
  color: #196eff;
}
.el-dialog__wrapper {
  overflow: auto;
}
.is-active {
  color: rgb(0, 0, 0) !important;
}
.is-active:hover {
  color: rgb(0, 0, 0) !important;
}
.el-tabs__active-bar {
  background-color: black !important;
}

.site-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.site-status {
  font-family: "Roboto";
  margin-top: 5px;
  margin-right: 15px;
  align-self: center;
  display: flex;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 8px;
  &-text {
    margin-left: 10px;
  }
}

.status-running {
  color: green;
}
.server-tag {
  align-self: center;
  background-color: #409eff;
  color: #fff;
  border-radius: 4px;
  padding: 3px;
  cursor: pointer;
}
.general-info {
  display: flex;
  justify-content: space-between;
}
.general-info-header {
  font-family: "Roboto";
  font-weight: 900;
  font-size: 20px;
}
.info-card {
  background-color: rgba(255, 255, 255, 0.2);
  // padding-left: 50px;
  padding-top: 20px;
  min-height: 400px;
}
.table-card {
  background-color: rgba(255, 255, 255, 0.2);
  // padding-left: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.general-info-table {
  &-title {
    font-weight: 900;
  }
}
.v-modal {
  display: none !important;
}
</style>