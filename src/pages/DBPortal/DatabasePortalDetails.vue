<template>
  <div class="row">
    <b-col xs="12" md="12" style="height:100vh">
      <div class="site-header">
        <div style="display:flex">
          <div>
            <h1 class="page-title" style="margin:0">{{ url[1] }} &nbsp;</h1>
            <div style="display:inline">
              <h5
                style="cursor:pointer"
                @click="$router.push('/app/company/' + header.companyId)"
              >
                <div v-if="detail.dbtype == 1">SQL Server</div>
                <div v-if="detail.dbtype == 2">Oracle Database</div>
              </h5>
            </div>
          </div>
          <b-button class="badge badge-resize rdp-color" @click="downloadRDP()">
            <i class="fa fa-terminal" aria-hidden="true"></i> &nbsp;&nbsp;
            Connect with RDP</b-button
          >
        </div>
        <div class="site-status status-running">
          <div style="align-self: center;">
            <img
              src="../../assets/ok-128.png"
              width="48px"
              height="48px"
              alt
              srcset
            />
            <br />
          </div>

          <div class="site-status-text">
            <h4 style="font-family:Roboto; display:block;margin-top:12px">
              {{ header.availability }}
            </h4>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <el-tabs v-model="activeName" @tab-click="handleTabClick()">
          <el-tab-pane label="General" name="general">
            <div class="row general-info">
              <div class="col-md-4">
                <div class="col-md-12 info-card">
                  <h5 class="general-info-header">Basic Details</h5>

                  <div v-if="detail.dbtype == 1">
                    <table class="table">
                      <tr>
                        <td class="general-info-table-title">Domain:</td>
                        <td class="general-info-table-value">
                          {{ detail.domain }}
                        </td>
                      </tr>
                      <tr>
                        <td class="general-info-table-title">IP Address:</td>
                        <td class="general-info-table-value">
                          {{ detail.ipAddress }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">
                          Operating System:
                        </td>
                        <td class="general-info-table-value">
                          {{ detail.osversion }}
                        </td>
                      </tr>
                      <tr>
                        <td class="general-info-table-title">
                          SQL Version:
                        </td>
                        <td class="general-info-table-value">
                          {{ detail.version }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">
                          Logical CPU Count
                        </td>
                        <td class="general-info-table-value">
                          {{ detail.logicalCpuCount }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">
                          Physical CPU Count
                        </td>
                        <td class="general-info-table-value">
                          {{ detail.physicalCpuCount }}
                        </td>
                      </tr>
                      <tr>
                        <td class="general-info-table-title">Memory:</td>
                        <td class="general-info-table-value">
                          {{ detail.memory }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">Port:</td>
                        <td class="general-info-table-value">
                          {{ detail.port }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">Machine Type:</td>
                        <td class="general-info-table-value">
                          {{ detail.machineType }}
                        </td>
                      </tr>
                      <tr>
                        <td class="general-info-table-title">Aktif Pasif:</td>
                        <td class="general-info-table-value">
                          {{ detail.aktifPasif }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title"></td>
                        <td class="general-info-table-value"></td>
                      </tr>
                    </table>
                  </div>

                  <div v-if="detail.dbtype == 2">
                    <table class="table">
                      <tr>
                        <td class="general-info-table-title">Domain:</td>
                        <td class="general-info-table-value">
                          {{ detail.domain }}
                        </td>
                      </tr>
                      <tr>
                        <td class="general-info-table-title">IP Address:</td>
                        <td class="general-info-table-value">
                          {{ detail.ipAddress }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">
                          Operating System:
                        </td>
                        <td class="general-info-table-value">
                          {{ detail.osversion }}
                        </td>
                      </tr>
                      <tr>
                        <td class="general-info-table-title">
                          Oracle Version:
                        </td>
                        <td class="general-info-table-value">
                          {{ detail.version }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">
                          Logical CPU Count
                        </td>
                        <td class="general-info-table-value">
                          {{ detail.logicalCpuCount }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">
                          Physical CPU Count
                        </td>
                        <td class="general-info-table-value">
                          {{ detail.physicalCpuCount }}
                        </td>
                      </tr>
                      <tr>
                        <td class="general-info-table-title">Memory:</td>
                        <td class="general-info-table-value">
                          {{ detail.memory }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title"></td>
                        <td class="general-info-table-value"></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="col-md-12 info-card">
                  <div v-if="detail.dbtype == 1">
                    <table class="table">
                      <tr>
                        <td class="general-info-table-title">Record Date:</td>
                        <td class="general-info-table-value">
                          {{ detail.recordDate }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">Delete Date:</td>
                        <td class="general-info-table-value">
                          {{ detail.deleteDate }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">
                          Connection Script:
                        </td>
                        <td
                          class="general-info-table-value"
                          style="font-size:12px"
                        >
                          {{ detail.connectionScript }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">Edition:</td>
                        <td class="general-info-table-value">
                          {{ detail.editionInstalled }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">
                          Product Build Level
                        </td>
                        <td class="general-info-table-value">
                          {{ detail.productBuildLevel }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">
                          SP Level
                        </td>
                        <td class="general-info-table-value">
                          {{ detail.splevel }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">
                          Collation Type :
                        </td>
                        <td
                          class="general-info-table-value"
                          style="font-size:12px"
                        >
                          {{ detail.collationType }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">
                          SQL Bit
                        </td>
                        <td class="general-info-table-value">
                          {{ detail.sqlbit }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">
                          Is Cluster
                        </td>
                        <td class="general-info-table-value">
                          {{ detail.isClustered }}
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div v-if="detail.dbtype == 2">
                    <table class="table">
                      <tr>
                        <td class="general-info-table-title">Port:</td>
                        <td class="general-info-table-value">
                          {{ detail.port }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">Machine Type:</td>
                        <td class="general-info-table-value">
                          {{ detail.machineType }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">Record Date:</td>
                        <td class="general-info-table-value">
                          {{ detail.recordDate }}
                        </td>
                      </tr>

                      <tr>
                        <td class="general-info-table-title">Delete Date:</td>
                        <td class="general-info-table-value">
                          {{ detail.deleteDate }}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="col-md-12 info-card">
                  <br />
                  <h5 class="general-info-header">Organization Details</h5>

                  <table class="table">
                    <tr>
                      <td class="general-info-table-title">Owned by:</td>
                      <td class="general-info-table-value">
                        {{ detail.owner }}
                      </td>
                    </tr>

                    <tr>
                      <td class="general-info-table-title">Environment:</td>
                      <td class="general-info-table-value">
                        {{ detail.environment }}
                      </td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Service:</td>
                      <td class="general-info-table-value">
                        {{ detail.domain }}
                      </td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title">Notes:</td>
                      <td class="general-info-table-value">
                        {{ detail.description }}
                      </td>
                    </tr>
                    <tr>
                      <td class="general-info-table-title"></td>
                      <td class="general-info-table-value"></td>
                    </tr>
                  </table>
                </div>
              </div>
              <!-- Web Config - Other -->
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
        </el-tabs>
      </div>
    </b-col>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//import { getRDPFile } from "@/api/portal/";
//import { getUserName } from "@/utils/auth/";

export default {
  name: "Server",
  components: {},
  data() {
    return {
      activeName: "general",
    };
  },
  created() {
    const url = this.$route.params.id.split("-");
    this.url = url;
  },
  mounted() {
    //this.fetch_detail(this.$route.params.id);
    this.fetch_detail(this.$route.params.id.split("-")[0]);
    this.fetch_header(this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      detail: "portal/GET_SERVER_DETAILS",
      header: "portal/GET_SERVER_HEADER",
      sites: "portal/GET_SERVER_SITES",
    }),
  },
  methods: {
    ...mapActions({
      fetch_detail: "portal/action_getServerDetails",
      fetch_header: "portal/action_getServerHeader",
      fetch_sites: "portal/action_getServerSites",
    }),
    handleTabClick() {
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
    },
    //  downloadRDP() {
    //  var data = { ServerId: this.$route.params.id, UserName: getUserName() };
    // getRDPFile(data);
    // },
  },
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
.text-right {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  align-self: flex-end;
  text-align: right;
  margin-right: 15px;
  display: flex;
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
  min-height: 500px;
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
.rdp-color {
  background-color: #008c9e;
  color: #ffffff;
}
.rdp-color:hover {
  background-color: #00b4cc;
  color: #ffffff;
}
.rdp-color:active {
  background-color: #00dffc;
  color: #ffffff;
}
.badge-resize {
  height: 26px;
  margin-top: 7px;
}

.rdp-icon {
  width: 24px !important;
  height: 24px !important;
}
</style>
