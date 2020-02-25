    <template>
  <div class="row">
    <b-col xs="12" md="12" style="height:100vh">
      <div class="site-header">
        <div style="display:flex">
          <div>
            <h1 class="page-title" style="margin:0">{{header.companyName}} &nbsp;</h1>
            <div style="display:inline">
              <!-- <h5>Doğuş Otomotiv A.Ş.</h5> -->
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <el-tabs v-model="activeName" @tab-click="handleTabClick()">
          <el-tab-pane label="Servers" name="servers">
            <h4 class="fw-semi-bold">Servers</h4>
            <br />
            <div class="col-md-12 table-card">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Server Name</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">IP Address</th>
                    <th scope="col">Operating System</th>
                    <th scope="col">Environments</th>
                    <th scope="col">Application Type</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Last Backup Date</th>

                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(s, i) in this.servers" :key="i">
                    <th scope="row">{{++i}}</th>
                    <td>
                      <router-link class="site-link" :to="{ name: 'Server', params: { id: s.serverId }}">{{s.serverName}}</router-link>
                    </td>

                    <td>{{s.fullName}}</td>
                    <td>{{s.ipAddress}}</td>
                    <td>{{s.operatingSystem}}</td>
                    <td>{{s.environments}}</td>
                    <td>{{s.applicationType}}</td>
                    <td>{{s.owner}}</td>
                    <td>{{s.contact}}</td>
                    <td>{{s.lastBackupDate}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-tab-pane>

          <el-tab-pane label="Sites" name="sites">
            <h4 class="fw-semi-bold">Sites</h4>
            <br />
            <div class="col-md-12 table-card">
              <table class="table table-striped">
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
          <el-tab-pane label="Statistics " :disabled="true">Task</el-tab-pane>
        </el-tabs>
      </div>
    </b-col>
  </div>
</template>

    <script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Company",
  components: {},
  data() {
    return {
      activeName: "servers"
   
    };
  },
   mounted(){
    this.fetch_servers(this.$route.params.id);
    this.fetch_header(this.$route.params.id);
  },
    computed: {
    ...mapGetters({
      servers: "company/GET_COMPANY_SERVERS",
      header: "company/GET_COMPANY_HEADER",
      sites: "company/GET_COMPANY_SITES"
    })
    },
  methods: {
    ...mapActions({
      fetch_servers: "company/action_getCompanyServers",
      fetch_header: "company/action_getCompanyHeader",
      fetch_sites: "company/action_getCompanySites"
    }),
    handleTabClick() {
      switch (this.activeName) {
        case "servers":
          this.fetch_servers(this.$route.params.id);
          break;
        case "sites":
          this.fetch_sites(this.$route.params.id);
          break;
     
      }
      }
    }
  
};
</script>

    <style lang="scss">
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