<template>
  <div class="row">
    <b-col xs="12" md="12" style="height:100vh">
      <div class="site-header">
        <div style="display:flex">
          <div>
            <h1 class="page-title" style="margin:0">d-teknoloji.com.tr &nbsp;</h1>
            <div style="display:inline">
              <h5>Doğuş Teknoloji</h5>
            </div>
          </div>
          <p class="server-tag">TestServer</p>
        </div>
        <div class="site-status status-running">
          <div style="align-self: center;">
            <img src="../../assets/ok-128.png" width="48px" height="48px" alt srcset />
            <br />
          </div>

          <div class="site-status-text">
            <h5 style="font-family:Roboto; font-weight: 900; display:block;margin-top:5px">STARTED</h5>

            <h5 style="margin-top:-7px">Available</h5>
            <h6 style="margin-top:-7px">Last Check - 5 min ago</h6>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <el-tabs>
          <el-tab-pane label="General">
            <div class="row general-info">
              <div class="col-md-4">
                <div class="col-md-12 info-card">
                  <h5 class="general-info-header">Site</h5>
                  <table class="table">
                    <tr>
                      <td class="general-info-table-title">Machine Name:</td>
                      <td class="general-info-table-value">TestServer</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Name:</td>
                      <td class="general-info-table-value">d-teknoloji.com.tr/</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Application Pool Name:</td>
                      <td class="general-info-table-value">d-teknoloji.com.tr/</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Physical Path:</td>
                      <td class="general-info-table-value">A:\...</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Enabled Protocols:</td>
                      <td class="general-info-table-value">http, https</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Max Band With:</td>
                      <td class="general-info-table-value">4294967295</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Max Connections:</td>
                      <td class="general-info-table-value">4294967295</td>
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
                      <td class="general-info-table-value" style="color:green">Yes</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Log File Directory:</td>
                      <td class="general-info-table-value">A:\...</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Log Format:</td>
                      <td class="general-info-table-value">W3c</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Log Period:</td>
                      <td class="general-info-table-value">Daily</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Server Auto Start</td>
                      <td class="general-info-table-value" style="color:green">Yes</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Trace Failed Requests Logging Enabled:</td>
                      <td class="general-info-table-value" style="color:red">No</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Last Updated:</td>
                      <td class="general-info-table-value">18/10/2019 13:00</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Date Deleted:</td>
                      <td class="general-info-table-value">18/10/2019 13:00</td>
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
                      <td class="general-info-table-value">18.10.2019 14:00</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Web Config Backup Directory</td>
                      <td class="general-info-table-value">A\...</td>
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
                      <td class="general-info-table-value">4.1.1</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Send Alert Mail When Unavailable</td>
                      <td class="general-info-table-value" style="color:green">Yes</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">App Type:</td>
                      <td class="general-info-table-value">Root</td>
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
          <el-tab-pane label="Bindings">
            <h4 class="fw-semi-bold">Bindings</h4>
            <br />
            <div class="col-md-12 table-card">
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
                  <tr>
                    <th scope="row">1</th>
                    <td>0.0.0.0</td>
                    <td>InterNetwork</td>
                    <td>80</td>
                    <td>d-teknoloji.com.tr</td>
                    <td>http</td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td>192.168.75.135</td>
                    <td>InterNetwork</td>
                    <td>443</td>
                    <td>d-teknoloji.com.tr</td>
                    <td>https</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>0.0.0.0</td>
                    <td>InterNetwork</td>
                    <td>80</td>
                    <td>d-teknoloji.com.tr</td>
                    <td>http</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Backend Sevices">
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
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>TestServiceSoap</td>
                    <td>80</td>
                    <td>http://lorem/services/lorem/lorem.asmx</td>
                    <td>Yes</td>
                    <td>18.10.2019 - 14:20</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>TestServiceSoap12</td>
                    <td>80</td>
                    <td>http://lorem/services/lorem/lorem.asmx</td>
                    <td>Yes</td>
                    <td>18.10.2019 - 14:20</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>TestService</td>
                    <td>80</td>
                    <td>http://lorem/services/lorem/lorem.asmx</td>
                    <td>Yes</td>
                    <td>18.10.2019 - 14:20</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 class="mt-5 fw-semi-bold">Direct DB Connection</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div class="col-md-12 table-card">
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
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>10.0.1.2</td>
                    <td>mckdbnm</td>
                    <td>1433</td>
                    <td>mckusr</td>
                    <td>data source=10.0.1.2,1433;initial catalog=mckdbnm;User ID=mckusr;Password=0;MultipleActiveResultSets=True;Connect Timeout=10;Integrated Security=false</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>MCKSRVNM</td>
                    <td>mckdbnm</td>
                    <td>1433</td>
                    <td>mckusr</td>
                    <td>data source=MCKSRVNM,1433;initial catalog=mckdbnm;persist security info=True;user id=mckusr;password=0;MultipleActiveResultSets=True</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>mcksrvnm.database.windows.net</td>
                    <td>mckdbnm</td>
                    <td>1433</td>
                    <td>mckusr</td>
                    <td>data source=mcksrvnm.database.windows.net;initial catalog=mckdbnm;persist security info=True;user id=mckusr;password=0;multipleactiveresultsets=True;application name=EntityFramework</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="col-md-12"></div>
          </el-tab-pane>
          <el-tab-pane label="Packages">
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
                  <tr>
                    <th scope="row">1</th>
                    <td>NetFrameworkVersion</td>
                    <td>4.5.1</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>FluentValidation</td>
                    <td>3.4.0.0</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Autofac</td>
                    <td>3.5.0.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Event Tracking">
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
          <el-tab-pane label="Statistics ">
               <Widget
          title="<h6>Weekly Request</h6>"
          refresh
          close
          customHeader
        >
        <line-chart :chart-data="lineChartData" />
        </Widget>
          </el-tab-pane>
        </el-tabs>
      </div>
    </b-col>

    <el-dialog
      title="Details"
      :visible.sync="detailVisible"
      width="50%"
    >
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
    <el-dialog
      title="Solution Details"
      :visible.sync="solutionVisible"
      width="50%"
    >
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
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
export default {
  name: "Site",
  components: {
    Widget
  },
  data() {
    return {
      detailVisible: false,
      solutionVisible:false,
     
    
      textarea: ""
    };
  }
};
</script>

<style lang="scss" scoped>
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