<template>
  <div class="row">
    <b-col xs="12" md="12" style="height:100vh">
      <div class="site-header">
        <div style="display:flex">
          <div>
            <h1 class="page-title" style="margin:0">{{header.siteName}} &nbsp;</h1>
            <div style="display:inline">
              <h5 style="cursor:pointer"  @click="$router.push('/app/company/'+header.companyId)">{{header.companyName}}</h5>
            </div>
          </div>
          <p class="server-tag" @click="$router.push('/app/server/'+header.machineId)">{{header.machineName}}</p>
        </div>
        <div class="site-status status-running">
          <div style="align-self: center;">
            <img src="../../assets/ok-128.png" width="48px" height="48px" alt srcset />
            <br />
          </div>

          <div class="site-status-text">
            <h5 style="font-family:Roboto; font-weight: 900; display:block;margin-top:5px">{{header.state}}</h5>

            <h5 style="margin-top:-7px">{{header.availability}}</h5>
            <h6 style="margin-top:-7px">Last Check - {{header.lastUpdated}}</h6>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <el-tabs v-model="activeName" @tab-click="handleTabClick()">
          <el-tab-pane label="General" name="general">
            <div class="row general-info">
              <div class="col-md-4">
                <div class="col-md-12 info-card">
                  <h5 class="general-info-header">Site</h5>
                  <table class="table">
                    <tr>
                      <td class="general-info-table-title">Machine Name:</td>
                      <td class="general-info-table-value">{{site.machineName}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Name:</td>
                      <td class="general-info-table-value">{{site.name}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Application Pool Name:</td>
                      <td class="general-info-table-value">{{site.applicationPoolName}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Physical Path:</td>
                      <td class="general-info-table-value">{{site.physicalPath}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Enabled Protocols:</td>
                      <td class="general-info-table-value">{{site.enabledProtocols}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Max Band With:</td>
                      <td class="general-info-table-value">{{site.maxBandwidth}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Max Connections:</td>
                      <td class="general-info-table-value">{{site.maxConnections}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title"></td>
                      <td class="general-info-table-value"></td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title"></td>
                      <td class="general-info-table-value"></td>
                    </tr>
                  </table>
                </div>
              </div>
              <!-- Log info -->
              <div class="col-md-4">
                <div class="col-md-12 info-card">
                  <h5 class="general-info-header">Log</h5>

                  <table class="table">
                    <tr>
                      <td class="general-info-table-title">Log File Enabled:</td>
                      <td
                        class="general-info-table-value"
                        v-bind:class="{ 'text-yes': site.logFileEnabled=='Yes', 'text-danger': site.logFileEnabled=='No' }"
                      >{{site.logFileEnabled}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Log File Directory:</td>
                      <td class="general-info-table-value">{{site.logFileDirectory}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Log Format:</td>
                      <td class="general-info-table-value">{{site.logFormat}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Log Period:</td>
                      <td class="general-info-table-value">{{site.logPeriod}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Server Auto Start</td>
                      <td
                        class="general-info-table-value"
                        v-bind:class="{ 'text-yes': site.serverAutoStart=='Yes', 'text-danger': site.serverAutoStart=='No' }"
                      >{{site.serverAutoStart}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Trace Failed Requests Logging Enabled:</td>
                      <td
                        class="general-info-table-value"
                        v-bind:class="{ 'text-yes': site.traceFailedRequestsLoggingEnabled=='Yes', 'text-danger': site.traceFailedRequestsLoggingEnabled=='No' }"
                      >{{site.traceFailedRequestsLoggingEnabled}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Last Updated:</td>
                      <td class="general-info-table-value">{{site.lastUpdated}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Date Deleted:</td>
                      <td class="general-info-table-value">{{site.dateDeleted}}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <!-- Web Config - Other -->
              <div class="col-md-4">
                <div class="col-md-12 info-card">
                  <h5 class="general-info-header">Web Config</h5>

                  <table class="table">
                    <tr>
                      <td class="general-info-table-title">Web Config Last Backup Date:</td>
                      <td class="general-info-table-value">{{site.webConfigLastBackupDate}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Web Config Backup Directory</td>
                      <td class="general-info-table-value">{{site.webcConfigBackupDirectory}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title"></td>
                      <td class="general-info-table-value"></td>
                    </tr>
                  </table>

                  <br />
                  <h5 class="general-info-header">Other</h5>
                  <table class="table">
                    <tr>
                      <td class="general-info-table-title">Net Framework Version:</td>
                      <td class="general-info-table-value">{{site.netFrameworkVersion}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Send Alert Mail When Unavailable</td>
                      <td
                        class="general-info-table-value"
                        v-bind:class="{ 'text-yes': site.sendAlertMAilWhenUnavailable=='Yes', 'text-danger': site.sendAlertMAilWhenUnavailable=='No' }"
                      >{{site.sendAlertMAilWhenUnavailable}}</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">App Type:</td>
                      <td class="general-info-table-value">{{site.appType}}</td>
                    </tr>
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
          <el-tab-pane label="Bindings" name="bindings">
            <h4 class="fw-semi-bold">Bindings</h4>
            <br />
            <div class="col-md-12 table-card" v-if="this.bindings.length>0">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ip Address</th>
                    <th scope="col">Ip Adress Family</th>
                    <th scope="col">Ports</th>
                    <th scope="col">Host</th>
                    <th scope="col">Protocols</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(b, i) in this.bindings" :key="i">
                    <th scope="row" >{{++i}}</th>
                    <td>{{b.ipAddress}}</td>
                    <td>{{b.ipAddressFamily}}</td>
                    <td>{{b.ports}}</td>
                    <td>{{b.host}}</td>
                    <td>{{b.protocols}}</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Backend Sevices" name="backend">
            <h4 class="fw-semi-bold">Endpoints</h4>
            <br />
            <div class="col-md-12 table-card">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Endpoint Name</th>
                    <th scope="col">Port</th>
                    <th scope="col">Endpoint Url</th>
                    <th scope="col">Is Available</th>
                    <th scope="col">Last Check Date</th>
                  </tr>
                </thead>
                <tbody  v-if="!forbidden_endpoint">
                  <tr v-for="(e,i) in this.endpoints" :key="i">
                    <th scope="row">{{++i}}</th>
                    <td>{{e.endpointName}}</td>
                    <td>{{e.port}}</td>
                    <td>{{e.endpointUrl}}</td>
                    <td>{{e.isAvailable}}</td>
                    <td>{{e.lastCheckDate}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-12 table-card text-center" v-if="forbidden_endpoint">
               <h5> This Operation is requires elevated permissions.</h5>
            </div>

            <h4 class="mt-5 fw-semi-bold">Direct DB Connection</h4>

            <div class="col-md-12 table-card" >
              <table class="table table-striped" style="width:100%">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Server Name</th>
                    <th scope="col">Database Name</th>
                    <th scope="col">Port</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Raw Connection String</th>
                  </tr>
                </thead>
                <tbody v-if="!forbidden_db_conneciton">
                  <tr v-for="(d,i) in this.db_connections" :key="i">
                    <th scope="row">{{++i}}</th>
                    <td>{{d.databaseName}}</td>
                    <td>{{d.databaseName}}</td>
                    <td>{{d.port}}</td>
                    <td>{{d.username}}</td>
                    <td>{{d.connectioString}}</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
            <div class="col-md-12 table-card text-center" v-if="forbidden_db_conneciton">
               <h5> This Operation is requires elevated permissions.</h5>
            </div>

            <div class="col-md-12"></div>
          </el-tab-pane>
          <el-tab-pane label="Packages" name="packages">
            <h4 class="fw-semi-bold">Packages</h4>
            <br />
            <div class="col-md-12 table-card">
              <table class="table table-striped" style="width:100%">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Version</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p,i) in this.packages" :key="i">
                    <th scope="row">{{++i}}</th>
                    <td>{{p.name}}</td>
                    <td>{{p.version}}</td>
                  </tr>
                
                </tbody>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Event Tracking" :disabled="true" name="event">
            <h4 class="fw-semi-bold">Events</h4>
            <br />
            <div class="col-md-12 table-card">
              <table class="table table-striped" style="width:100%">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Code</th>
                    <th scope="col">Error Type</th>
                    <th scope="col">Message</th>
                    <th scope="col">Time</th>
                    <th>Solution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>3005</td>
                    <td>Warning</td>
                    <td>
                      An unhandled exception has occurred
                      <span
                        class="server-tag"
                        style="float:right;"
                        @click="detailVisible = true"
                      >Show Details...</span>
                    </td>
                    <td>01/01/2019 00:00:40</td>
                    <td>
                      <button class="btn btn-tn btn-primary" @click="solutionVisible=true">Resolve</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td></td>
                    <td>Info</td>
                    <td>This site works fine! :)</td>
                    <td>01/01/2019 00:40:40</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td></td>
                    <td>Error</td>
                    <td>Oops, I didn't match any event log for this site :( I guess it may be stop by an user</td>
                    <td>01/01/2019 01:00:40</td>
                    <td>
                      <button class="btn btn-tn btn-primary">Resolve</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Statistics" :disabled="true" name="statistics">
            <Widget title="<h6>Weekly Request</h6>" refresh close customHeader>
              <!-- <line-chart :chart-data="this.lineChartData" /> -->
            </Widget>
          </el-tab-pane>
        </el-tabs>
      </div>
    </b-col>

    <el-dialog title="Details" :visible.sync="detailVisible" width="50%">
      <textarea readonly class="form-control" id="exampleFormControlTextarea1" rows="20">
       Exception information:

         Exception type: NullReferenceException

          Exception message: Object reference not set to an instance of an object.
         at GetHandler.ProcessRequest(HttpContext context)
         at System.Web.HttpApplication.CallHandlerExecutionStep.System.Web.HttpApplication.IExecutionStep.Execute()
         at System.Web.HttpApplication.ExecuteStep(IExecutionStep step, Boolean& completedSynchronously)
      




          Request information:

              Request URL: https://d-teknoloji.com.tr

              Request path: /get/vendor

              User host address: 0.0.0.0

              User: 

              Is authenticated: False

              Authentication Type: 

              Thread account name: IIS APPPOOL\d-teknoloji.com.tr



          Thread information:

              Thread ID: 6

              Thread account name: IIS APPPOOL\d-teknoloji.com.tr

              Is impersonating: False

              Stack trace:    at GetHandler.ProcessRequest(HttpContext context)
             at System.Web.HttpApplication.CallHandlerExecutionStep.System.Web.HttpApplication.IExecutionStep.Execute()
             at System.Web.HttpApplication.ExecuteStep(IExecutionStep step, Boolean& completedSynchronously)

     </textarea>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="detailVisible = false">Close</el-button>
      </span>
    </el-dialog>
    <el-dialog title="Solution Details" :visible.sync="solutionVisible" width="50%">
      <div class="form-group">
        <label for="inputEmail4">Solution</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="default" @click="solutionVisible = false">Cancel</el-button>
        <el-button type="primary" @click="solutionVisible = false">Resolve</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Site",
  components: {
    Widget
  },
  data() {
    return {
      detailVisible: false,
      solutionVisible: false,
      activeName: "general",
      textarea: "",
      forbidden_db_conneciton:false,
      
      forbidden_endpoint:false
    };
  },
  mounted() {
    // this.getSiteList();
          this.fetch_header(this.$route.params.id);
          this.fetch_site(this.$route.params.id);
  },
  computed: {
    //    GET_SELECTED_SITE () {
    //   return this.$store.getters.site/GET_SELECTED_SITE
    // }
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      site: "site/GET_SELECTED_SITE",
      bindings:"site/GET_SELECTED_SITE_BINDINGS",
      endpoints:"site/GET_SELECTED_SITE_BACKEND_SERVICES_ENDPOİNTS",
      db_connections:"site/GET_SELECTED_SITE_BACKEND_SERVICES_DIRECT_DB_CONNECTION",
      packages:"site/GET_SELECTED_SITE_PACKAGES",
      header:"site/GET_SELECTED_SITE_HEADER"
      })
  },
  methods: {
    ...mapActions({
      fetch_site:"site/action_getSite",
      fetch_bindings: "site/action_SELECTED_SITE_BINDINGS",
      fetch_endpoints:"site/action_SELECTED_SITE_BACKEND_SERVICES_ENDPOİNTS",
      fetch_db_connections:"site/action_SELECTED_SITE_BACKEND_SERVICES_DIRECT_DB_CONNECTION",
      fetch_packages:"site/action_SELECTED_SITE_PACKAGES",
      fetch_header:"site/action_getSiteHeader"
    }),
    handleTabClick() {
      console.log(this.activeName);
      switch (this.activeName) {
        case "general":
          this.fetch_site(this.$route.params.id);
          break;
        case "bindings":
          this.fetch_bindings(this.$route.params.id);
          break;
        case "backend":
          this.fetch_endpoints(this.$route.params.id).catch(err=>{
            if(err==403)
              this.forbidden_endpoint=true;
          });;
          this.fetch_db_connections(this.$route.params.id).then(res=>{
            console.log(res);
          }).catch(err=>{
            if(err==403)
              this.forbidden_db_conneciton=true;
          });
          break;
        case "packages":
          this.fetch_packages(this.$route.params.id);
          break;
        case "event":
          break;
        

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.text-yes{
  color:green;
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