    <template>
  <div class="row">
    <b-col xs="12" md="12" style="height:100vh">
      <div class="site-header">
        <div style="display:flex">
          <div>
            <h1 class="page-title" style="margin:0">Doğuş Otomotiv A.Ş. &nbsp;</h1>
            <div style="display:inline">
              <!-- <h5>Doğuş Otomotiv A.Ş.</h5> -->
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <el-tabs>
          <el-tab-pane label="Servers">
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
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <router-link class="site-link" to="/app/server">lorem.lorem.com.tr</router-link>
                    </td>

                    <td>fw.lorem.com.tr</td>
                    <td>0.0.0.0</td>
                    <td>Microsoft Windows Server 2016 (64-bit)</td>
                    <td>Production</td>
                    <td>IIS8</td>
                    <td>DT Uygulama Yönetimi</td>
                    <td>DT Uygulama Yönetimi</td>
                    <td>30.10.2019 13:04:02</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <router-link class="site-link" to="/app/server">lorem.lorem.com.tr</router-link>
                    </td>
                    <td>fw.lorem.com.tr</td>
                    <td>0.0.0.0</td>
                    <td>Microsoft Windows Server 2016 (64-bit)</td>
                    <td>Pre-Prod</td>
                    <td>IIS8</td>
                    <td>DT Uygulama Yönetimi</td>
                    <td>DT Uygulama Yönetimi</td>
                    <td>30.10.2019 13:04:02</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <router-link class="site-link" to="/app/server">lorem.lorem.com.tr</router-link>
                    </td>
                    <td>fw.lorem.com.tr</td>

                    <td>0.0.0.0</td>
                    <td>Microsoft Windows Server 2016 (64-bit)</td>
                    <td>Test</td>
                    <td>IIS8</td>
                    <td>DT Uygulama Yönetimi</td>
                    <td>DT Uygulama Yönetimi</td>
                    <td>30.10.2019 13:04:02</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                    <td>
                      <router-link class="site-link" to="/app/site">lorem.lorem.com.tr</router-link>
                    </td>

                    <td>A:\...\...</td>
                    <td>lorem.lorem.com.tr</td>
                    <td>Started</td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <router-link class="site-link" to="/app/site">lorem.lorem.com.tr</router-link>
                    </td>
                    <td>A:\...\...</td>
                    <td>lorem.lorem.com.tr</td>
                    <td>Started</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <router-link class="site-link" to="/app/site">lorem.lorem.com.tr</router-link>
                    </td>
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