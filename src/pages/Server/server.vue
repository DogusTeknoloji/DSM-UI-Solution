<template>
  <div class="row">
    <b-col xs="12" md="12" style="height:100vh">
      <div class="site-header">
        <div style="display:flex">
          <div>
            <h1 class="page-title" style="margin:0">TestServer &nbsp;</h1>
            <div style="display:inline">
              <h5>Doğuş Teknoloji</h5>
            </div>
          </div>
        </div>
        <div class="site-status status-running">
          <div style="align-self: center;">
            <img src="../../assets/ok-128.png" width="48px" height="48px" alt srcset />
            <br />
          </div>

          <div class="site-status-text">
            <h4 style="font-family:Roboto; display:block;margin-top:12px">Running</h4>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <el-tabs>
          <el-tab-pane label="General">
            <div class="row general-info">
              <div class="col-md-4">
                <div class="col-md-12 info-card">
                  <h5 class="general-info-header">Details</h5>
                  <table class="table">
                    <tr>
                      <td class="general-info-table-title">Domain:</td>
                      <td class="general-info-table-value">fw.lorem.com.tr</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">IP Address:</td>
                      <td class="general-info-table-value">0.0.0.0</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Web Server:</td>
                      <td class="general-info-table-value">IIS 8</td>
                    </tr>

                    <tr>
                      <td class="general-info-table-title">Operation System:</td>
                      <td class="general-info-table-value">Windows Server 2008</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">CPU:</td>
                      <td class="general-info-table-value">Intel Xeon E5 2.6 GHZ (6 Processors)</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Memory:</td>
                      <td class="general-info-table-value">48 GB</td>
                    </tr>

                    <tr>
                      <td class="general-info-table-title">Last Backup:</td>
                      <td class="general-info-table-value">19.10.2019 21:30:42</td>
                    </tr>
                       <tr>
                      <td class="general-info-table-title">Site Count:</td>
                      <td class="general-info-table-value">100</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Online Site Count</td>
                      <td class="general-info-table-value">70</td>
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
                      <td class="general-info-table-value">C:\, D:\, F:\</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Total Capacity</td>
                      <td class="general-info-table-value">200 GB</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Percent Free</td>
                      <td class="general-info-table-value">20 %</td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Last Check Date</td>
                      <td class="general-info-table-value">20 min ago</td>
                    </tr>
                  </table>

                 
                </div>
              </div>
              <!-- Web Config - Other -->
              <div class="col-md-4">
                <div class="col-md-12 info-card">
                  
                  <h5 class="general-info-header">Volume Details</h5>
                  <table class="table">
                    <tr>
                      <td class="general-info-table-title">C:\</td>
                      <td>20 GB</td>
                      <td>80 GB</td>
                      <td class="general-info-table-value">100 GB ( 20% free)</td>
                    </tr>
                         <tr>
                      <td class="general-info-table-title">D:\</td>
                      <td class=" text-danger">3 GB</td>
                      <td class=" text-danger">97 GB</td>
                      <td class="general-info-table-value text-danger">100 GB ( 3% free)</td>
                    </tr>
                         <tr>
                      <td class="general-info-table-title">F:\</td>
                       <td>20 GB</td>
                      <td>80 GB</td>
                      <td class="general-info-table-value">100 GB ( 20% free)</td>
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
          <el-tab-pane label="Sites">
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
                  <tr>
                    <th scope="row">1</th>
                    <td><router-link class="site-link" to="/app/site">lorem.lorem.com.tr</router-link> </td>

                    <td>A:\...\...</td>
                    <td>lorem.lorem.com.tr</td>
                    <td>Started</td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td><router-link class="site-link" to="/app/site">lorem.lorem.com.tr</router-link> </td>
                    <td>A:\...\...</td>
                    <td>lorem.lorem.com.tr</td>
                    <td>Started</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td><router-link class="site-link" to="/app/site">lorem.lorem.com.tr</router-link> </td>
                    <td>A:\...\...</td>
                    <td>lorem.lorem.com.tr</td>
                    <td>Started</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-tab-pane>
      
          <el-tab-pane label="Statistics ">Task</el-tab-pane>
        </el-tabs>
      </div>
    </b-col>

    <el-dialog
      title="Details"
      :visible.sync="detailVisible"
      width="50%"
      :before-close="handleClose"
    >
      <textarea readonly class="form-control" id="exampleFormControlTextarea1" rows="20">
       Exception information:

         Exception type: NullReferenceException

          Exception message: Object reference not set to an instance of an object.
         at vw2015_CmsBridge.GetHandler.ProcessRequest(HttpContext context)
         at System.Web.HttpApplication.CallHandlerExecutionStep.System.Web.HttpApplication.IExecutionStep.Execute()
         at System.Web.HttpApplication.ExecuteStep(IExecutionStep step, Boolean& completedSynchronously)
      




          Request information:

              Request URL: https://binekarac2.vw.com.tr:443/get/vendor?subdomain=ahlatciapp1

              Request path: /get/vendor

              User host address: 192.168.75.250

              User: 

              Is authenticated: False

              Authentication Type: 

              Thread account name: IIS APPPOOL\binekarac.vw.com.tr



          Thread information:

              Thread ID: 6

              Thread account name: IIS APPPOOL\binekarac.vw.com.tr

              Is impersonating: False

              Stack trace:    at vw2015_CmsBridge.GetHandler.ProcessRequest(HttpContext context)
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
      :before-close="handleClose"
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
export default {
  name: "Site",
  components: {},
  data() {
    return {
      detailVisible: false,
      solutionVisible: false,
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-08",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-06",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-07",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ],
      textarea: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.site-link{
    color:#196eff;
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